const http = require('http');
const fs = require('fs');


const server = http.createServer(function (req, res) {
    let url = req.url;
    let method = req.method;

    if (url == '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Send message</title></head><body><h1>send message</h1><form method="POST" action="/message"> <input type="text" name="message" /><button type="submit">send</button></form></body></html>')
        return res.end()
    }
    if (url === '/message' && method == 'POST') {
        fs.writeFileSync('./message.txt', 'new message2');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>my node server</title></head><body><h1>Welcome to my node server</h1></body></html>')
    res.end();
});

server.listen(3000);
