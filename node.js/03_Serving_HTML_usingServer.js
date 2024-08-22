const http = require('http');
const fs = require('fs');
const content = fs.readFileSync('testfile.txt', 'utf-8');
const port = 8000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end(content)
});

server.listen(port,hostname,()=>{
    console.log(`Server is ready ${hostname}:${port}`)
});