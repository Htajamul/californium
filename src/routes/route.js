const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js");
// const UserController= require("../controllers/userController");
//const userrmodel=require("../practice/practice")
const userctrl=require("../controllers/user")
//const bookModel=require("../models/book");
const BookControl=require("../controllers/bookctrl");

const hussain=require("../controllers/tajamul")

// const bookmode=require("../practice/practice")
// //const bookctrl=require("../")
// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)
 router.post("/test",userctrl.createe)
 router.get("/testt",userctrl.getuser)
 router.post("/tester" , BookControl.createData)
 router.get("/tesster" , BookControl.getData)
 
 router.post("/tajamul",hussain.hussain)
 router.get("/hussain",hussain.wani)
 router.get('/test-me',function(req,res){

    res.send("hiiii")
});
module.exports = router;