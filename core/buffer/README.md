# Buffers

Buffers are a series of bytes.

## What does that mean?

If you are completely new to computer programming/science,
here's a *quick intro* to Bits, Bytes and Octets.


## Buffers

Pure JavaScript is *Unicode friendly* but not nice to binary data.
When dealing with TCP streams or the file system, it's necessary to
handle [octet streams](http://en.wikipedia.org/wiki/Bitstream).
Node has several ways of manipulating, creating, and consuming octet streams.

Buffers are used *internally* by Node.js but available to everyone.

Here's a simple example of creating a new **Buffer** containing the
word "hello". You will notice that the buffer stores the the
***hexadecimal*** values for the characters.

```javascript
var buf = new Buffer('hello'); // <Buffer 68 65 6c 6c 6f>
var str = buf.toString();      // hello
```

### new Buffer(size)

*Allocates a new buffer of size octets.*

Feeding **new Buffer()** a numeric parameter simply
allocates that amount of memory to the buffer for later use.

```javascript
var buf = new Buffer(10); // <Buffer 10 d6 33 00 01 00 00 00 00 c8>
var str = buf.toString(); // �3�  (incomprehensible - non-printable chars)
```
Practical use? None. (If I find one I will let you know.)

### new Buffer(array)

*Allocates a new buffer using an array of octets.*

Similar to the **new Buffer(number)** but
allows you to pass in an array; node creates a placeholder
for each element in the array in your new Buffer.
```javascript
var buf = new Buffer(['hello','world']); // <Buffer 00 00>
var str = buf.toString(); // empty
```

Practical use? None.

### new Buffer(str, [encoding])

str String - string to encode.
encoding String - encoding to use, Optional.
Allocates a new buffer containing the given str. encoding defaults to 'utf8'.

> Waste of time...


- http://nodejs.org/api/buffer.html#buffer_buffer
- Ascii to hex to binary conversion table: http://www.ascii-code.com
