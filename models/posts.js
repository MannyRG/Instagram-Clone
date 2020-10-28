
const mongoose = require('mongoose'); // require mongoose
const Schema = mongoose.Schema;



const postSchema = new Schema({ 
    img:{type: Array, default:[]},
    caption:{type: String, default: String },
    comments:{type: Array, default:[]},
    likes: {type: Number, default: 0},
    shares: {type: Number, default: 0 },
})


const bitPost = mongoose.model('bitPost ', postSchema);

module.exports = bitPost;



