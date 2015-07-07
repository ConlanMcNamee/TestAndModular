#!/usr/bin/env node

var greet = require("./lib/greet.js");

console.log(process.argv);

var arg2 = process.argv.slice(2);

if (args) {
	console.log(greet(arg2.toString()));
}
//the command line command i used for this was first chmod +x app.js
// then i could run ./app.js 'Henry'
// and it will console log the correct response
