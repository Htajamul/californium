const tajamul = require("../models/tajamul");
const bookmodel = require("../models/tajamul")

  //bookmodel=require("../models/tajamul")
const createbook=async function(req,res){
    let data=req.body
    let savedata=await bookmodel.create(data)
    res.send({msg:savedata})
};
const booklist=async function(req,res){
    let allbook=await bookmodel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg:allbook})
};
const getbooksinyear= async function(req,res){
    let year=req.body.year
    let allbooks=await bookmodel.find().select({year:year,_id:0,authorName:"tajamul",bookName:"my first ever book"})
    res.send({msg:allbooks})
};
const getparticularbook=async function(req,res){
    let ISBN=req.body.ISBN
    let allbooks=await bookmodel.find({ISBN:ISBN})
    //let allbooks=await bookmodel.find({authorName:"tajamul"},{bookName:"my first ever book"})   //.select()
  res.send({msg:allbooks})
}
const getxinrbook=async function(req,res){
    let indianPrice=req.body.indianPrice
    let allBooks=await bookmodel.find({$or:[{indianPrice:"100"},{indianPrice:"101"},{indianPrice:"102"}]})
  res.send({msg:allBooks})
}
const getrandombooks=async function(req,res){
   let stockAvail=req.body.stockAvail
   let totalpages=req.body.totalpages
   let allbooks=await bookmodel.find({$or:[{stockAvail:"true"},{totalpages:{$gt:500}}]})
  res.send({msg:allbooks})
}


module.exports.getparticularbook=getparticularbook
module.exports.createbook=createbook
module.exports.booklist=booklist
module.exports.getbooksinyear=getbooksinyear
module.exports.getxinrbook=getxinrbook
module.exports.getrandombooks=getrandombooks
//"my first ever book"
//"tajamul"
//sales : { $in: [10, 17, 82] } 