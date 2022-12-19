const mongoose=require("mongoose")
 
const bookSchema= new mongoose.Schema({

bookName: {
    type: String,
    required: true
},
ISBN: {
    type: String,
    required: true,
    unique: true
},
authorName: String,
tags: [ String ], 
year:{type: Number,default:2021},
totalpages:Number,

prices: {
    indianPrice: String,
    europeanPrice: String,
    japanPrice: String
},
sales: {
    type: Number,
    default : 0
},
completionDate: Date,
stockAvail:Boolean,


}, {timestamps: true} )
 
module.exports = mongoose.model( "book", bookSchema )
 