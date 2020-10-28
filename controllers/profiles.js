
const express = require('express')
const router = express.Router()
const bitUsers= require('../models/users.js')
const bitPost= require('../models/posts.js')



//////////////////////////////////////////////-------
//// -----Index Route -----
router.get('/profile/:username', (req,res)=>{

    bitUsers.findOne({username:req.params.username}, (error,foundProfile)=>{
         res.render(`index.ejs`,{
             profile: foundProfile
         })
     })
})





////------New Route-----//
router.get('/profile/:id/newPost', (req,res)=>{

    res.render('new.ejs',{
        profileId: req.params.id
    })
})



////------New Route Post-----//
router.post('/profile/:id',(req,res)=>{
    const newPost = bitPost

    newPost.img.push(req.body.img)
    newPost.caption = req.body.caption
        console.log(newPost)

    bitUsers.findByIdAndUpdate(req.params.id,
        {$push:
            {posts:newPost}
        },
        (err,foundProfile)=>{
        console.log(foundProfile)
        res.redirect(`/profile/${foundProfile.username}`)
    })
})



////------Show Route-----

router.get('/post/:id/:post', (req,res)=>{

    bitUsers.findById(req.params.id,(error, foundProfile )=>{
        res.render('show.ejs',{
            post: foundProfile.posts,
            postId: req.params.post,
            profileId: foundProfile.id,
        })
    })
})






//------Delete Route-----//
router.delete('/post/:id/:post',(req,res)=>{

    bitUsers.findByIdAndUpdate(req.params.id,{
        $pull:{
            posts: req.params.post,
        }
    },(error, foundProfile )=>{
        // res.send(foundProfile)
        res.redirect(`/profile/${foundProfile.username}`)
    })
})




////------Edit Route-----//
router.get('/post/:id/edit/:post', (req,res)=>{
   
    bitUsers.findById(req.params.id,(error, foundProfile )=>{
        res.render('edit.ejs',{
            post: foundProfile.posts[req.params.post],
            profileId: foundProfile.id,
            date: foundProfile.posts[req.params.post],
            username: foundProfile.username
        })
    })
})

   


//------Edit Route Put-----//
router.put('/update/:id/:date',(req,res)=>{
    const newCaption = req.body.caption;
    const data = req.params.date;
    // res.send(req.body)


    bitUsers.findByIdAndUpdate({_id: req.params.id , "post.date": req.params.date},
        {$set:{
            "posts.$.caption": req.params.caption
        },
    }
        ,(error, foundProfile )=>{
        // res.redirect(`/bitgram/profile/${foundProfile.username}`)
        // res.send(foundProfile)
    })
    bitUsers.findById({_id: req.params.id}
    ,(error, foundProfile )=>{
    res.redirect(`/profile/${foundProfile.username}`)

})

})

module.exports = router


