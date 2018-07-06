require('dotenv').config();
const express=require('express');
const app=express();
const axios =require('axios');
const massive=require('massive');
const session=require('express-session');


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













app.listen(SERVER_PORT,()=>{
    console.log(`Server is listening on port: ${SERVER_PORT}`)
});