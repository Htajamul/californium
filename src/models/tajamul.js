const { default: mongoose } = require("mongoose")
const mopngoose =require("mongoose")
const userSchema=new mongoose.Schema({
    name:String,
    contact:Number,
    email:String,
    date:{
        type:Date,
        default:Date.now
    },
    tags:[String]
},{timestepmsa:true})
module.exports=mongoose.model("tajamul",userSchema)