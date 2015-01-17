/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true,
 bitwise:true, strict:true, undef:true, curly:true, node:true,
 indent:4, maxerr:50, globalstrict:true */

var assert = require('assert'),
    i,
    tests = ( typeof tests != 'undefined' ) ? tests : {},
    T = {};

process.on('uncaughtException', function (err) {
//   console.log('Exception Stack Trace >> ' + err.stack);
  nlog(err);
});

tests.a = function () {
    "use strict";

//     console.log('Function A called');
};
tests.b = function () {
    "use strict";
//     console.log('Test B called');
    var b = 2;
    assert.equal(b, 2, 'variable b should be equal to two');
};


T.run = function (tests) {
    "use strict";
    var i;
    for (i in tests) {
        if (typeof tests[i] === "function") {
	    nlog('  Function ' +i +' called ');
            tests[i]();
        }
    } // end test runner.
    console.log('... end');
};


T.run(tests);

// run();

function nlog(s) {
 console.log(' >> ' +s);
}
