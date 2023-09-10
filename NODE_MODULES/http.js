const http = require('http');

const PORT = 2000;

//thats the way to create new server
http.createServer((req,res) => {
    res.write("new server created")
    res.end();
}).listen(PORT); //listen helps to open the server on the given port
