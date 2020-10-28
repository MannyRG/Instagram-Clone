const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()

const bitUser = require('../models/users.js')


users.get('/signup',(req, res)=>{

    res.render('users/signup.ejs',{currentUser: req.session.currentUser})
})



users.post('/',(req, res)=>{

req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10) )

bitUser.create(req.body,(err, createUSER)=>{
    console.log(createUSER)
    
    res.redirect('/profile')
})



})







module.exports = users

