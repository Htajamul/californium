const mongoose=require("mongoose");
const bookSchema = new mongoose.Schema({
    bookName:String,
    authorName:String,
    category:String,
    year:Number,
    tags:[String],
    date:{
        type:Date,
        default:Date.now
    },
    isPublished:Boolean

},{timestamps:true});
module.exports=mongoose.model("book",bookSchema)