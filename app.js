#!/usr/bin/env node

var greet = require("./lib/greet.js");

var arg2 = process.argv.slice(process.argv.indexOf('Henry'));

if (arg2) {
	console.log(greet(arg2.toString()));
}
//the command line command i used for this was first chmod +x app.js
// then i could run ./app.js 'Henry'
// and it will console log the correct response
