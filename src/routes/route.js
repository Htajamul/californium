const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const bookcontroll=require("../controllers/tajamulcontroller")  //this
const tajamul=require("../models/tajamul")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbookdata",bookcontroll.createbook)//this
router.get("/getbookdata",bookcontroll.booklist)// this
router.post("/getbooksinyear",bookcontroll.getbooksinyear)//this
router.post("/getparticularbooks",bookcontroll.getparticularbook)//this
router.get("/getxinrbook",bookcontroll.getxinrbook)//this
router.get("/getrandombooks",bookcontroll.getrandombooks)//this

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;