var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);

// these three assertions are equivalent:
assert( expected === 3, 'one plus two is three');
assert.ok( expected == 3, 'one plus two is three');
assert.equal(expected, 3, 'one plus two is three');

// these three assertions are equivalent:
assert(expected != 4, 'one plus two is three');
assert.ok(expected != 4, 'one plus two is three');
assert.notEqual(expected, 4, 'one plus two is three (NOT Four!)');
