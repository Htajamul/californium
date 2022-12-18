//const book = require("../models/book")
const bookModel=require("../models/book")
const createData=async function(req,res){
    let data=req.body
    let saveData=await bookModel.create(data)
    res.send({msg:saveData})
};
const getData=async function(req,res){
    let allbook=await bookModel.find({bookName:"boilogy"}).count()
    res.send({msg:allbook})
};
module.exports.createData=createData
module.exports.getData=getData