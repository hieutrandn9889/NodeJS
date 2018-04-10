// gọi module 
var http = require("http");
// khởi tạo 1 con server
// trong đó  có req: từ client sẽ request server và khi đó res: trả về cho client mở ra những gì khác hàng xem vd: image, text
http.createServer(function(req, res){
	//writeHead : truyền vào mã file vd : 404 là lỗi trả về, 200 là mã gì đó ở đây là chuỗi
	res.writeHead(200,{"Content-Type":"text/plain"});
	// trả về ở đây là chuỗi
	res.end("Hieutran");
	// mở port 8888 để trả về
}).listen(8888);


