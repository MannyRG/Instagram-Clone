


require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT 
const mongodbURI = process.env.MONGODBURI

// const bitUsers= require('./models/users.js')
const methodOverride = require('method-override');
const session = require('express-session')


app.use(methodOverride('_method'));
app.use(express.json())
app.use(express.urlencoded({extends: true}))


app.use(express.static('public'))

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}))

  

/////// Mongoose Connection
const mongoose = require('mongoose');

const db = mongoose.connection;
mongoose.connect(mongodbURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
    console.log('the connection with mongod is established');
  });
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongodbURI));
db.on('disconnected', () => console.log('mongo disconnected'));
//////////////




const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController)
const profilesController = require('./controllers/profiles.js');
app.use('/profile', profilesController)
const usersController = require('./controllers/users.js');
app.use('/accounts', usersController)




/////////////////////////////

///// ------Home-----

app.get('/',(req,res)=>{
    res.render('home.ejs',{
    })
} )






app.listen(port, () => {
     console.log('listening on port', port)
 }) 



 







