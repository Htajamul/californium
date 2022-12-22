const authorModel = require("../models/authorModel")
const AuthorModel= require("../models/authorModel")
const bookmodel=require("../models/bookModel")
const publishmodel=require("../models/publishmodel")
//AUTHOR
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}
//publish
const createpublish=async function(req,res){
    let publish=req.body;
    let publishcreate= await publishmodel.create(publish)
    res.send({msg:publishcreate})
}
//BOOK
const createbook=async function(req,res){
    let book=req.body
    const{name,raring,publisher,author,price}=req.body
    if(!author){
        return res.send({status:false,msg:"author is not mandatory"})
    }
    if(!publisher){
        return res.send({status:false,msg:"publisher is not mandatory"})
    }
    let bookcreate=await bookmodel.create(book)
    res.send({msg:bookcreate})
}





const getbpa=async function(req,res){
    let data=await bookmodel.find().populate("author").populate("publisher")
    res.send({msg:data})
    
}


module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.createpublish=createpublish
module.exports.createbook=createbook
module.exports.getbpa=getbpa

