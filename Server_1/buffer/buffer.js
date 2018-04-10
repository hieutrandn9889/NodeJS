// chuyen chuoi "Hello" thanh buffer "<Buffer 48 65 6c 6c 6f>"
var buffer = new Buffer("Hello", "utf8");
console.log(buffer);
// chuyen buffer thanh chuoi
console.log(buffer.toString());
// chuyen buffer thanh JSON
console.log(buffer.toJSON());