
const mongoose = require('mongoose'); // require mongoose
const Schema = mongoose.Schema;




const bitPost ={ 
    date: Date(),
    img:[],
    caption: "",
    comments:[],
    likes: 0,
    shares: 0,
}



module.exports = bitPost;



