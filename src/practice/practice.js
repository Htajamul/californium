const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:String,
    age:String,
    address:String,
    aaa:String,
},{timestamps:true});
 module.exports=mongoose.model("userr",userSchema)
// const mongoose=require("mongoose")
// const bookSchema=new mongoose.Schema({
//     author:String,
//     booknam:String,
//     sales:10,
    

// },{timeseries:true})
// module.exports=mongoose.model("book",bookSchema)