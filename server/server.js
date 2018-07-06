require('dotenv').config();
const express=require('express');
const app=express();
const axios =require('axios');
const massive=require('massive');
const session=require('express-session');
app.use(express.json());
const controller='./controller.js';

let {
    SESSION_SECRET,
    SERVER_PORT, 
    CONNECTION_STRING
}=process.env;

app.use(session({
    secret:SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db);
});



app.post('/api/login', (req,res)=>{
    const{username,password}=req.body;
    const db=req.app.get('db')
    db.find_user([username, password]).then(user=>{
        if(user[0]){
            req.session.user=user[0]
            res.status(200).send(user[0])
        }else{
            res.status(401).send({
                error:'User not found'
            })

        }
    })

})
app.post('/api/register', (req,res)=>{
    const{username,password}=req.body;
    const db=req.app.get('db')
    db.create_user([username, password]).then(user=>{
        req.session.user=user[0]
        res.status(200).send(user[0])
            })

        }
    )


app.get('/api/user',(req,res)=>{
    res.send(req.session.user)
})




app.listen(SERVER_PORT,()=>{
    console.log(`Server is listening on port: ${SERVER_PORT}`)
});