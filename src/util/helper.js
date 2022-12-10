const printDate=function(){
    var newDate= new Date();
    console.log("the current date is :",newDate);
}
const printMonth=function(month){
    var newMonth = new Date();
    console.log("the current month is",newMonth);
}
const getbatchinfo=function(week){
    console.log(`${week}, the topic for today is nodeja module system`)
}
module.exports.mydate=printDate
module.exports.mymonth=printMonth
module.exports.mybatch=getbatchinfo