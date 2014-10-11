# Buffers

Buffers are a series of bytes.

## What does that mean?

If you are completely new to computer programming/science,
here's a *quick intro* to Bits, Bytes and Octets.

### Bits

A [**bit**](http://en.wikipedia.org/wiki/Bit)
is the basic unit of information in computing
and digital communications usually expressed as 0 (Zero) or 1 (One).
The word bit is short for **b**inary dig**it**.
*Binary* means there are two options
e.g: true/false, 0/1 or on/off

#### Counting in Binary (bits)

Starting at Zero, the first 16 numbers in Binary are:

```
+---+---+----+----+-----+-----+-----+-----+------+------+------+------+------+------+------+------+
| 0 | 1 |  2 |  3 |   4 |   5 |   6 |   7 |    8 |    9 |   10 |   11 |   12 |   13 |   14 |   15 |
+---+---+----+----+-----+-----+-----+-----+------+------+------+------+------+------+------+------+
| 0 | 1 | 10 | 11 | 100 | 101 | 110 | 111 | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |
+---+---+----+----+-----+-----+-----+-----+------+------+------+------+------+------+------+------+

```
Did you spot the pattern(s)?


### Bytes

A [**byte**](http://en.wikipedia.org/wiki/Byte)
is a unit of digital information in computing and
telecommunications that most commonly consists of **eight bits**.

### Hello! in Binary (8-Bit ASCII)


```
01001000 01100101 01101100 01101100 01101111 00100001
    H        e        l        l        o        !
```
Try it: http://text2binary.herokuapp.com/



Pure JavaScript is Unicode friendly but not nice to binary data.
When dealing with TCP streams or the file system, it's necessary to
handle [octet streams](http://en.wikipedia.org/wiki/Bitstream).
Node has several ways of manipulating, creating, and consuming octet streams.

Buffers are used *internally* by Node.js but available to everyone.

```
var buf = new Buffer('hello');
var str = buf.toString();
```


- http://nodejs.org/api/buffer.html#buffer_buffer

gest0
sloppylopez
