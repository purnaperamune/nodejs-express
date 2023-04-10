var http = require('http')
var fs = require('fs')

http.createServer(function(req, res){
    fs.appendFile('./File handling/demo2.txt', 'Writing somthing here!', (err) => {
        if(err){
            throw err;
        }
        console.log("File Saved!")
        res.end("File Saved!")
    })
}).listen(3000)