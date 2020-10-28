
const express = require('express')
const router = express.Router()
// const bitUsers= require('../models/users.js')
const bitPost= require('../models/posts.js')



//////////////////////////////////////////////-------
//// -----Index Route -----
router.get('/', (req,res)=>{

    bitPost.find({}, (error,foundProfile)=>{
         res.render(`profile/index.ejs`,{
             profile: foundProfile,
             currentUser: req.session.currentUser
         })
     })
})





////------New Route-----//
router.get('/newPost', (req,res)=>{

    res.render('profile/new.ejs',
    {currentUser: req.session.currentUser})
})



////------New Route Post-----//
router.post('/',(req,res)=>{
    const newPost  = req.body.img
        bitPost.create(req.body,
        // {$push:
        //     {img:newPost}
        // },
        (err,foundProfile)=>{
        console.log(foundProfile)
        res.redirect('/profile')
    })
})



////------Show Route-----

router.get('/:id/', (req,res)=>{

    bitPost.findById(req.params.id,(error, foundPost)=>{
        res.render('profile/show.ejs',{
            post: foundPost,
            currentUser: req.session.currentUser
        })
    })
})


////------Edit Route-----//
router.get('/post/:id/edit/', (req,res)=>{
   
    bitPost.findById(req.params.id,(error, foundProfile )=>{
        res.render('profile/edit.ejs',{
            post:foundProfile,
            currentUser: req.session.currentUser
        })
    })
})

   


//------Edit Route Put-----//
router.put('/post/:id',(req,res)=>{

    bitPost.findByIdAndUpdate(req.params.id, 
        req.body,{new:true},

        (error, foundProfile )=>{
            res.redirect('/profile')
    })
})



//------Delete Route-----//
router.delete('/post/:id/',(req,res)=>{

    bitPost.findByIdAndRemove(req.params.id
        ,(error, foundProfile )=>{
        res.redirect('/profile')
    })
})



module.exports = router


