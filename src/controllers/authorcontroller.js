const authormodel=require("../models/authors.js")
const bookmodel=require("../models/books.js")

const createBook = async function (req,res){
    let data = req.body
    let allbooks =  await bookmodel.create(data)
    res.send({msg:allbooks})
}




const createAuthor = async function (req,res){
    let data= req.body
    let allauthors = await authormodel.create(data)
    res.send({msg:allauthors})
}

 module.exports.createBook = createBook
 module.exports.createAuther = createAuthor










