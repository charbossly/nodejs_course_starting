const http = require('http');

const server = http.createServer(function (req, res) {
    console.log(req.url, req.method, req.headers);
    //exit pour arreter le server
    //process.exit()
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><head><title>my node server</title></head><body><h1>Welcome to my node server</h1></body></html>')
    res.end();
})

server.listen(3000);