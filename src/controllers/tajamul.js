const tajamulmodel=require("../models/tajamul")
const hussain=async function(req,res){
    let data=req.body
    let tj=await tajamulmodel.create(data)
    res.send({msg:tj})
}
const wani=async function(req,res){
    let saveee=await tajamulmodel.find()
    res.send({msg:saveee})
}
module.exports.hussain=hussain
module.exports.wani=wani