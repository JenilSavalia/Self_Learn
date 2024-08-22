const fs = require('fs')

// for reading file _____ fs.readFileSync('path','encoding');
let myfile = fs.readFileSync('testfile.txt','utf-8')
//fs.readFileSync(path[, options])

myfile = myfile.replace("Jay Swaminarayan","Hello")
console.log(myfile)

// for exporting file _____ fs.writeFileSync('file', data);

fs.writeFileSync('export_test.txt',myfile);

//Node modules are an essential aspect of Node.js, allowing developers to include various libraries and packages into their applications. These modules can be either built-in, part of the Node.js framework, or external, installed via npm (Node Package Manager).

//    ________________Built-in modules........................
// are included with Node.js and do not require any additional installation. You can simply require them in your application using the ___  require()  _____ function. For example, the http module can be included and used to create a server:

// var http = require('http');

// http.createServer(function (req, res) {
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.end('Hello World!');
// }).listen(8080);

// External modules,
//  on the other hand, are not part of the Node.js core and need to be installed using npm. These modules are stored in the node_modules folder after installation. This folder acts as a cache for the external modules your project depends on. When you use npm install, the modules are downloaded from the web and copied into this folder.

