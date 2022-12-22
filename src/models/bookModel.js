const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "newauthor"
    }, 
    price: Number,
    rating: Number,
    publisher:{
        type:ObjectId,
        ref:"newpublisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
