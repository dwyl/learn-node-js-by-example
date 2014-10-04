# Assert lets you Test your Code

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

### assert.fail(actual, expected, message, operator)

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

Tests if value is "truthy", it is equivalent to
assert.equal(true, !!value, message);

The simplest assertion.

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
Usefulness: universal.


## Try it!

Open the assert.js file and try a few examples.
Remember you won't see any output unless your test *fails*.


## Useful Links

- Assert API: http://nodejs.org/api/assert.html
- Chris Johansen's intro to node testing:
http://cjohansen.no/en/node_js/unit_testing_node_js_apps

> Make time to try: https://class.coursera.org/algo-004
