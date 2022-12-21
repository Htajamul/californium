const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array




const createauthor=async function(req,res){
    let data=req.body
    let savedata=await authormodel.create(data)
    // let isautherexist=await authormodel.findOne({author_id:body.author_id})
    // if(isautherexist){
    //     authormodel.create(data)
    //     res.send({msg:isautherexist})
    // }else{
    //     res.send({msg:"not exist"})
    // }
    res.send({msg:savedata})
}
// const getauthordata=async function(req,res){
//    // let allauthors=await authormodel.find()
//    // res.send({msg:allauthors})
//    let data=req.body
//    let isautherexist=await authormodel.findOne({author_id:author_id})
//     if(isautherexist){
//         authormodel.create(data)
//         res.send({msg:isautherexist})
//     }else{
//         res.send({msg:"not exist"})
//     }
// }
// // book=================================================
// const createbook=async function(req,res){
//     let data=req.body
//     let savedata=await bookmodel.create(data)
//     res.send({msg:savedata})
// }
// const getbookdata=async function(req,res){
//     let allbooks=await bookmodel.find()
//     res.send({msg:allbooks})
// }
