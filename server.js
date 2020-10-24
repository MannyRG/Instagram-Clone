


require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT 
const bitPost= require('./models/test.js')

app.use(express.json())
app.use(express.urlencoded({extends: true}))


app.use(express.static('public'))







///-----Index Route-----

app.get('/bitgram/profile', (req,res)=>{
    

    res.render('index.ejs',{
        userProfile: bitPost,
    })

})




////------New Route-----//
app.get('/bitgram/new', (req,res)=>{
    const userPost = bitPost[0].posts[req.params.id]
    res.render('new.ejs',{
    })

})







////------Edit Route-----//
app.get('/bitgram/:id/edit', (req,res)=>{
    const userPost = bitPost[0].posts[req.params.id]
    res.render('edit.ejs',{
    })
})




////------Show Route-----
/// add ID Later

app.get('/bitgram/post/:id', (req,res)=>{
    const userPost = bitPost[0].posts[req.params.id]

    res.render('show.ejs',{
        post: userPost
    })
})





////------New Route Post-----//
app.post('/bitgram/',(req,res)=>{
    const newPost = req.body
    console.log(newPost)
    res.redirect('/bitgram/profile')
})


////------Edit Route Put-----//
app.put('/bitgram/:id',(req,res)=>{
    const newPost = req.body
    console.log(newPost)
    res.redirect('/bitgram/profile')
})




////------Edit Route Put-----//
app.delete('/bitgram/:id',(req,res)=>{
    const newPost = req.id
    console.log(newPost)
})




app.listen(port, () => {
     console.log('listening on port', port)
 }) 



 







