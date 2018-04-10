// đọc file phải đến module (require) fs : đọc file trên server or đọc file upload
var fs =  require("fs");
// hằng số __dirname là node có sẵn để gọi đường dẫn mặc định 
var noidung =  fs.readFileSync( __dirname + "/danhsach.txt");
console.log(noidung);
console.log(noidung.toString());