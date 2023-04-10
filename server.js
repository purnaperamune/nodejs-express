var http = require('http');
var timeFile = require('./timeGenerator')

http.createServer(function (req, res ){
    if(req.url == "/example"){
        res.end("Hey")
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(timeFile.getTime())
    res.end('Hello World!');
}).listen(8080);

