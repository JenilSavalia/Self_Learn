const http = require("http");
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./index.html');
const contact = fs.readFileSync('./contact.html');
const aboutus = fs.readFileSync('./aboutus.html');
const help = fs.readFileSync('./help.html');


const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (url == '/'){
        res.end(home);
    }
    else if (url == '/aboutus'){
        res.end(aboutus);
    }
    else if (url == '/contact'){
        res.end(contact);
    }
    else if (url == '/help'){
        res.end(help);
    }
    else{
        res.end('404 not found')
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });