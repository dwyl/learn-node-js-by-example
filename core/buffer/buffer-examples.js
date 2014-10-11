var buf = new Buffer('hello');
console.log(buf);
var str = buf.toString(); //
console.log(str);

var buf2 = new Buffer('ΞΨΩβλ');
console.log(buf2, buf2.toString());

var buf = new Buffer(10); // <Buffer 10 d6 33 00 01 00 00 00 00 c8>
console.log(buf);
var str = buf.toString(); // �3�
console.log(str);


var buf = new Buffer(['hello','world']); // <Buffer 00 00>
console.log(buf);
var str = buf.toString(); // empty
console.log(str);


console.log("Buffer.isEncoding('utf8') >> " + Buffer.isEncoding('utf8') ); // true
