var assert = require('assert');
// assert.fail(46, 42, 'Failed', '###')
function add (a, b) {
  return a + b;
}

var expected = add(1,2);
assert( expected === 4, 'one plus two is four');
