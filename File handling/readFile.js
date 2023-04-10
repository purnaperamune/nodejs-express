var http = require('http')
var fs = require('fs');
const { stringify } = require('querystring');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'})

    fs.readFile('./File handling/demofile1.txt', (err, data) => {
        if(err){
            throw err;
        }
        console.log(data)
        res.write(data)
        return res.end();

    })
}).listen(3000);