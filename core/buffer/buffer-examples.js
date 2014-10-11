var buf = new Buffer('hello');
console.log(buf);
var str = buf.toString(); //
console.log(str);

var buf2 = new Buffer('ΞΨΩβλ');
console.log(buf2, buf2.toString());
