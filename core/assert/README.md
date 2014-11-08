# Assert lets you *test* your code

## Prerequisites

- Node.js installed
- No prior knowledge

## Skill Level

- Basic/Beginner

## What?

***Assert*** - *verb* - state a fact or belief confidently and forcefully.
([dictionary definition](https://www.google.com/search?q=assert))

When writing code we write *tests* to *automatically* check
our code is working as we *expect* it to.

Assert is the most *rudimentary* way of writing tests.
It provides no feedback when running your tests *unless* one fails.

The assert module has 11 methods but you will only (regularly) use
a few of them: **assert.equal**, **assert.deepEqual**
and **assert.throws**. Each are explained *with examples* below.


### assert.fail(actual, expected, message, operator)

The first method (alphabetically), but the *least useful* for practical
purposes (unless you expect a method/test to always fail).

Throws an exception that displays the values for actual and expected separated
by the provided operator.

Example:
```js
assert.fail(21, 42, 'Test Failed', '###')
```
Output:
```js
  throw new assert.AssertionError({
        ^
AssertionError: Faild
    at Object.<anonymous> (assert.js:2:8)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:906:3
```
Usefulness: virtually *none*.
I haven't found a *practical* use for this.
http://nodejs.org/api/assert.html#assert_assert_fail_actual_expected_message_operator

### assert(value, message), assert.ok(value, [message])

Tests if value is "truthy", it is equivalent to:
```js
assert.equal(true, value, message);
```

The simplest assertion.

Example:
```js
var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);
assert( expected === 3, 'one plus two is three');
```

This will not have any output.
If you want to see output, you need to make the test *fail*:

```js
var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);
assert( expected === 4, 'one plus two is three');
```

Output:
```js
assert.js:92
  throw new assert.AssertionError({
        ^
AssertionError: one plus two is NOT four
    at Object.<anonymous> (/Users/n/code/node-js-by-example/core/assert/assert.js:8:1)
    at Module._compile (module.js:456:26)
```

`assert.ok(value, [message])` is essentially the same
as `assert(value, message);`

```js
var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);
assert.ok( expected === 3, 'one plus two is three');
```
Again, no output because the test passes.
To see some feedback, make the test fail.

**Usefulness**: ***universal***.
**assert** can be used to test *any* code.


### assert.equal(actual, expected, [message])

Tests shallow, coercive equality with the (double) equal
comparison operator ( == ).

#### Why would you use assert.equal() instead of assert() ?

If you want to make your test clearer use assert.equal
otherwise there is no benefit to the additional verbosity.

Example:
```js
var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);

// these three assertions are equivalent:
assert(expected == 3, 'one plus two is three');
assert.ok(expected == 3, 'one plus two is three');
assert.equal(expected, 3, 'one plus two is three');
```

### assert.notEqual(actual, expected, [message])

Tests shallow, coercive non-equality with the not equal
comparison operator ( != ).

Example:
```js
var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);

// these three assertions are equivalent:
assert(expected != 4, 'one plus two is three');
assert.ok(expected != 4, 'one plus two is three');
assert.notEqual(expected, 4, 'one plus two is three (NOT Four!)');
```

#### Why would you use assert.notEqual(1, 2) instead of assert(1 != 2) ?

Again, verbosity/clarity in your tests.


### assert.deepEqual(actual, expected, [message])

Tests for deep equality.

**assert.deepEqual** is the second of the *useful* methods.
We use it for comparing two objects (or arrays for equality).

Example:
```js
var assert = require('assert');

var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];

assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

var person1 = { "name":"john", "age":"21" };
var person2 = { "name":"john", "age":"21" };

// deepEqual checks the elements in the objects are identical
assert.deepEqual(person1, person2, 'these two objects are the same');
```

### assert.notDeepEqual(actual, expected, [message])

Tests for any deep inequality.
Useful when confirming two objects or arrays are not equal.

Example:
```js
var assert = require('assert');

var list1 = [1, 2, ,3, 4, 5];
var list2 = [1, 2, 3, 4, 5];

assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

var person1 = { "name":"john", "age":"21" };
var person2 = { "name":"jane", "age":"19" };

// deepEqual checks the elements in the objects are identical
assert.notDeepEqual(person1, person2, 'these two objects are NOT the same');
```

### assert.strictEqual(actual, expected, [message])

Tests strict equality, as determined by the strict equality operator ( === )

Similar to **assert.equal** but "strict" (type coersion).

Example:
```js
var assert = require('assert');

assert.strictEqual(1, '1', 'not the same'); // this will fail
```

### assert.notStrictEqual(actual, expected, [message])

Tests strict non-equality, as determined by the strict not equal operator ( `!==` )

The opposite of the strictEqual.

Example:
```js
var assert = require('assert');

assert.notStrictEqual(1, true, 'not the same (strictly)');
```

### assert.throws(block, [error], [message])

Expects block to throw an error. error can be constructor,
RegExp or validation function.

The **assert.throws** lets you check for *specific* errors in your functions.

Validate instanceof using constructor:

Example:
```
assert.throws(
  function() {
    throw new Error("Wrong value");
  },
  Error
);
```

### assert.doesNotThrow(block, [message])

Expects `block` not to throw an error, see `assert.throws` for details.

Example:
```js
assert.doesNotThrow(
  function() {
    console.log("Nothing to see here");
  },
  Error
);
```

Not particularly useful method because its *too vague*.
Its good to know your method did not throw an error under normal
circumstances.


### assert.ifError(value)

Tests if value is not a false value, throws if it is a true value.
Useful when testing the first argument, error in callbacks.

Example:
```js
// define a simple function with callback(err, value)
function sayHello(name, callback) {
  var error = false;
  var str   = "Hello "+name;
  callback(error, str);
}

// use the function
sayHello('World', function(err, value){
  assert.ifError(err);
  assert.equal(value, "Hello World");
})
```


## Try it!

As with all code, you can't expect to learn without *trying*.
Open the **assert.js** file in your editor and try a few examples.
Remember you won't see any output unless your test *fails*.
Run it with the command:

```js
node assert.js
```

## Useful Links

- Assert API: http://nodejs.org/api/assert.html
- Chris Johansen's intro to node testing:
http://cjohansen.no/en/node_js/unit_testing_node_js_apps

## In Practice (The "Real World")

In the "real world" people rarely use the node **assert** module
by its' self. Instead a **test runner** is used.

Examples of Node.js test runners include:

- Mocha: https://github.com/visionmedia/mocha
- Tape: https://github.com/substack/tape
- Lab: https://github.com/hapijs/lab

Each of these has their merits and will be discussed
in a later chapter on testing.
