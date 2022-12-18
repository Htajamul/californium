const userrmodel=require("../practice/practice")
const createe= async function(req,res){
    let data=req.body
    let savee=await userrmodel.create(data)
    res.send({message:savee})
};
const getuser =async function(req,res){
    let alluserr=await userrmodel.find()
    res.send({massade:alluserr})

}
module.exports.createe=createe
module.exports.getuser=getuser
// const bookmoderl=require("../practice/practice")
// const createdata=async function(req,res){
//     let data=req.body
//     let savedData=await bookmoderl.create(data)
//     res.send({msg:data})
// }
// const getdata=async function(req,res){
//     let allbook=await bookmoderl.find()
//     res.send({msg:allbook})
// }