var greet = require('../lib/greet.js');
var expect = require('chai').expect;
var args = process.argv;
console.log(args);

describe('greet.js', function() {
	it('will say "hello Henry" when passed Henry', function() {
		expect(greet('Henry')).to.eql('hello Henry');
	});
	it("will have values in process.argv", function() {
		expect(args).to.eql([ '/usr/local/bin/node','/usr/local/lib/node_modules/mocha/bin/_mocha','greetTest.js'])
	});
});