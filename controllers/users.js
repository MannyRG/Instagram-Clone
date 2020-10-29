const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()

const bitUser = require('../models/users.js')



users.get('/signup',(req, res)=>{

    res.render('users/signup.ejs',
    {currentUser: req.session.currentUser})
})



users.post('/',(req, res)=>{

req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10) )

console.log(req.body)


bitUser.create(req.body,(err, createUser)=>{
    console.log(createUser)

    res.redirect('/profile/' )
})

})





////------Edit Route-----//
users.get('/edit/', (req,res)=>{
   
    bitUser.findById(req.params.id,(error, foundProfile )=>{
        res.render('profile/edit.ejs',{
            post:foundProfile,
            currentUser: req.session.currentUser
        })
    })
})




//------Edit Route Put-----//
users.put('/',(req,res)=>{

    bitPost.findByIdAndUpdate(req.params.id, 
        req.body,{new:true},

        (error, foundProfile )=>{
            res.redirect('/profile')
    })
})







module.exports = users

