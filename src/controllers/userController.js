const UserModel= require("../models/userModel")




const basicCode2= async function(req, res) {
    let tokenDataInHeaders= req.headers.Date
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }





const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const getapi=async function(req,res){
    console.log("this is from user controller")
    res.send({msg:"get api is working fine"})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode2= basicCode2
module.exports.getapi= getapi