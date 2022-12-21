const authormodel=require("../models/authors.js")
const bookmodel=require("../models/books.js")
const { getBooksData } = require("./bookController.js")
//CREATE BOOK
const createBook = async function (req,res){
    let data = req.body
    let allbooks =  await bookmodel.create(data)
    res.send({msg:allbooks})
}
//GET BOOK
const getbook=async function(req,res){
    authordata=await authormodel.findOne({author_name:"chetan bhagat"}).select({author_id:1,_id:0})
    console.log(authordata)
    let data=await bookmodel.find(authordata).select({name:1,_id:0})
    res.send({msg:data})
}

//CREATE AUTHOR
const createAuthor = async function (req,res){
    let data= req.body
    let allauthors = await authormodel.create(data)
    res.send({msg:allauthors})
}
//GET AUTHOR
const getauthor=async function(req,res){
    let getdata=authormodel.find({author_name:"chetan bhagat"}).select({author_id:1,_id:0})
    let id=getdata.author_id
    let result=await bookmodel.updateMany({author_id:id},{price:100})
    res.send({msg:result})
}
//GET BOOK NAME &
const getbookname=async function(req,res){
    newbookdata=await bookmodel.findOneAndUpdate({name:"two states"},{$set:{price:265}});
    let authordata=await authormodel.findOne({author_id: newbookdata.author_id}).select({author_name:1,_id:0})
    res.send({name:authordata.author_name,price:newbookdata.price})
}
const getprice=async function(req,res){
    const pricedata=await bookmodel.findOne({price:{$gte:50,$lte:100}}).select({name:1,author_id:1,_id:0});
    let authordata=await Promise.all(pricedata.modifiedPaths(async(x)=>{
        let data=await authormodel.findOne({author_id:x.author_id}).select({author_name:1,_id:0})
        return {name:x.name,author_name:data.author_name}
    }))
    res.send({msg:authordata})
}

 module.exports.createBook = createBook
 module.exports.createAuther = createAuthor
 module.exports.getbook=getbook
 module.exports.getauthor=getauthor
 module.exports.getbookname=getbookname
 module.exports.getprice=getprice






