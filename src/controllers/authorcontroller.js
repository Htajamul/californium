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






// const  bookListById = async function (req, res){
//     let saveAuthorId = await authormodel.find({author_name: "Chetan Bhagat" }).select({author_id: 1,_id: 0}) 
//     let saveBookId = await bookmodel.find({author_id:{$eq:saveAuthorId[0]["author_id"]}}).select({name:1, _id:0})
//     res.send({msg:saveBookId}) 
    
//     }
    


    // const updatePrice = async function (req, res){
    //     let authorDoc = await bookmodel.findOneAndUpdate({name:"Two states"},{price:100}).select({author_id: 1, price: 1, _id: 0})
    //     // res.send({authorDoc}) 
    //     let authorName = await authormodel.find({author_id:{$eq:authorDoc.author_id}}).select({author_name: 1,_id:0} )
    // res.send({authorName, authorDoc})
    // }



    // bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1}).
    // .run a map(or forEach) loop and get all the authorName corresponding to the authorId’s 
    // ( by querying authorModel)



// const bookFindByPrice = async function(req,res){
//     let costBook = await bookmodel.find({price:{$gte:50,$lte:100}}).select({author_id:1, _id:0})
//     res.send(costBook)

// }

// module.exports.createBook = createBook
// module.exports.createAuther = createAuthor
// module.exports.bookListById = bookListById
// module.exports.updatePrice = updatePrice
// module.exports.bookFindByPrice = bookFindByPrice



