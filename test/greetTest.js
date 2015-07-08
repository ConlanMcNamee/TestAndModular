var greet = require('../lib/greet.js');
var expect = require('chai').expect;
var execSync = require('child_process').execSync;


describe('greet.js', function() {
	it('will say "hello Henry" when passed Henry', function() {
		expect(greet('Henry')).to.eql('hello Henry');
	});
	it("will read my file and match the output", function() {
		expect(String(execSync('node app.js "Henry"'))).to.equal("hello Henry\n");
	});
});