const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const { object } = require('underscore');
const { Router } = require('express');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

//PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})
// router.get("/movies",function(req,res){
//     const arr=["rand de basanti","the shining","loard of the rings","batman begins"]
//     res.send(arr)
// })
// PROBELM 1......
//  router.get('/moviess',function(req,res){
//     let mov=["rand de basanti","the shining","loard of the rings","batman begins"]
//     res.send(mov)
 //});
 //PROLEM 2...........problem......3
//  router.get('/mmovies/:indexNumber',function(req,res){
//     let mov=["rand de basanti","the shining","loard of the rings","batman begins"]
//     if(req.params.indexNumber > mov.length-1){
//         console.log("you are using invalid index")
//     }else{
//         console.log(mov[req.params.indexNumber])
//     }
//     //console.log(mov[req.params.indexNumber])
//     res.send("ok")
//  })
//  //problem..4..............5...

//  router.get('/films',function(req,res){
//     movies=[
//         {
//             id:1,
//             name:"the shining"
//         },
//         {
//             id:2,
//             name:"incendies"
//         },
//         {
//             id:3,
//             name:"rand de basanti"
//         },
//         {
//             id:4,
//             name:"finding nemo"
//         },
//     ]
   
//     res.send(movies)
//  })

// // problem.5...........=======================

//  router.get('/films/:filmid',function(req,res){
//     movies=[
//         {
//             id:1,
//             name:"the shining"
//         },
//         {
//             id:2,
//             name:"incendies"
//         },
//         {
//             id:3,
//             name:"rand de basanti"
//         },
//         {
//             id:4,
//             name:"finding nemo"
//         },
//     ]
    
//     for(let i=0;i<movies.length;i++){
//         if(req.params.filmid==movies[i].id){
//             console.log(movies[i])
//         }
//         else{
//             console.log("error")
//         }
//      }

//     res.send("hii")
//  })
//===TODAY ASSIGNMENT===
router.get("/sol1",function(req,res){
 const arr=[1,2,3,4,5,7,8];
 let missingnum=[];
 for(i=0;i<arr.length;i++){
   if(arr[i+1]-arr[i]===2){
    missingnum.push(arr[i]+1)
   }
 }
 
res.send(missingnum)

 });
 router.get('/sol2',function(req,res){
    const arrr=[33,34,35,37,38,39,40]
    let num=[];
    for(let i=0;i<arrr.length;i++){
        if(arrr[i+1]-arrr[i]===2){
         num.push(arrr[i]+1)
        }
      }
    res.send(num)
 });

module.exports = router;