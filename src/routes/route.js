const express = require('express');
const router = express.Router();
var lodash =require('lodash');
const intro = require('./introduction')
const employee = require('./employee')
const well=require('../logger/logger.js')
const date=require('../util/helper')
const month=require('../util/helper')
const batch=require('../util/helper')
const tolower=require('../validator/formatter')
const toupper=require('../validator/formatter')

//const t=require('../validator/formatter')
const _ = require('underscore');



router.get('/test-me', function (req, res) {
    tolower.lower();
    toupper.upper();
    //t.mytrim();
    
    date.mydate()
    month.mymonth()
    batch.mybatch('californium,W3D4,the topic for today is node js module system')
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)
    
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    well.wel('tajamul hussain')

    const arry=['jan','feb','march','aprl','may','june','july','aug','sep','oct','nov','dec']
    console.log(lodash.chunk(arry,3))
    const arryodd=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(arryodd))

    const arr1=[1,3,5,2]
    const arr2=[2,1,3,9]
    const arr3=[1,7,3,9]
    const arr4=[1,9,6,7]
    const arr5=[1,9,8,4]
    console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))

    const myobj=lodash.fromPairs([['horror','the shining'],['drama','titanic'],['thriller','shutter island'],['fantasy','pans labrinth']])
    console.log(myobj)

    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;