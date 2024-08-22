const querystring = require('querystring');
const MID = "AB9642"
const Branch  = "JDC"

    const data = { MID: `${MID}`, Branch: `${Branch}` };
const query = querystring.stringify(data);
const url = 'https://gurukul.ninja?' + query;
console.log(url);


// queryString.stringify({b: 1, c: 2, a: 3};
 //=> 'b=1&c=2&a=3'