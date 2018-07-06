module.exports={
  addUser: (req, res) => {
    const { name, password,} = req.body;
    req.app.get('db').create_user([name,password])
    .then( user => res.status(201).send(user))
    .catch( err => {
        console.log(err)
        res.status(500).send(err)
    })
},

      



}