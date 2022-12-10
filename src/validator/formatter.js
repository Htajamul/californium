// const trim=function(){
//     console.log("functionup")
// }

const changetoLowerCase=function(){
    var str="FUNCTIONUP"
    console.log("change the case of string to lower :",str.toLowerCase())
}

const changetoUpperCase=function(){
    var str="functionup"
    console.log("changes the string to upper :",str.toUpperCase())
}

//module.exports.mytrim=trim
module.exports.lower=changetoLowerCase
module.exports.upper=changetoUpperCase