const mongoose = require('mongoose'); // require mongoose
const Schema = mongoose.Schema;






const userSchema = new Schema({ 
    fullname:{type:String, required:true},
    username:{ type:String, unique:true, require: true},
    password: { type: String, required: true},
    description: {type: String, default: String },
    posts:[],

},{ minimize: false },
{timestamps:true}

)



const bitUsers = mongoose.model('bitUsers', userSchema);

module.exports = bitUsers;






