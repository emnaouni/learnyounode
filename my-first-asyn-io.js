var fs = require('fs')  
var file = process.argv[2] 
function read(){
    fs.readFile(file, function (err, contents){
        var lines = contents.toString().split('\n').length-1  
        
        console.log(lines)
    })} 

read();
// var fs = require('fs')  
// var file = process.argv[2]  
  
// fs.readFile(file, function (err, contents) {  
//   // fs.readFile(file, 'utf8', callback) can also be used  
//   var lines = contents.toString().split('\n').length - 1  
//   console.log(lines)  
// })