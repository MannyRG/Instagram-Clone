const bcrypt = require('bcrypt')
const { profile } = require('console')
const express = require('express')
const sessions = express.Router()
const bitUser = require('../models/users')

sessions.get('/new',(req, res)=>{
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})


sessions.post('/', (req,res)=>{




bitUser.findOne({username: req.body.username}, (err,foundUser)=>{
    // if(err){

    //     console.log(err)
    //     res.send("oops the db had problems")
    // }else if(!foundUser){

    //     res.send('<a href="/"> sorry user not found</a>')
    // }else{

    //     if(bcrypt.compareSync(req.body.password, foundUser.password)){
    //         req.session.currentUser =foundUser
    //         res.render('/profile')

    //     }else{
    //         res.send('<a href="/"> Password dosent match</a>')
    //     }

    // }
   res.redirect(`/profile`)
})

})




sessions.delete('/', (req,res)=>{

req.session.destroy(()=>{
    res.redirect('/')
})
})


module.exports = sessions
