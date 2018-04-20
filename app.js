
const logger = require('./logger')

const path = require('path');
const os = require('os');
const fs = require('fs');

logger('My log')
var freememory = os.freemem();
var totalmemory = os.totalmem();

console.log(freememory)
console.log(totalmemory)

// Template String
// ECMAScript 6
console.log(`Total Memory: ${totalmemory}`);
console.log(`Free Memory: ${freememory}`);

var pathObj = path.parse(__filename);
console.log(pathObj);

//const files = fs.readdirSync('./')
//console.log(files)

fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});


