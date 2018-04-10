// goi module http cho webServer
var http = require("http");
// goi module cho xu ly file (doc file, upload file)
var fs = require("fs");
http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/html"});
	// lay ra file va do vao pipe
	var data = fs.createReadStream(__dirname + "/index.html").pipe(res);
		data = data.replace("{NAME}", "Hieutran");
	res.end(data);
}).listen(9999);
