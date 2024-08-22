
// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking  ex : (node JS)
// - line by line execution not guaranteed
// - callbacks will fire

// ______________________________________________________________________________________

// Asynchronous or non-blocking 
const fs = require('fs');
fs.readFile('testfile.txt', 'utf-8', (err, data) => {
    console.log(data);
});


// (err,data)=>{
//     console.log(data);
// }                 (((((((((((((this is callback))))))))))))

console.log('Content of blog is ..........................');

//_______________________________________________________________________________


// Synchronous or blocking
const fs = require('fs');
fs.readFileSync('testfile.txt', 'utf-8')    // blocks here until file is read