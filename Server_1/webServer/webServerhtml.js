// goi module http cho webServer
var http = require("http");
// goi module cho xu ly file (doc file, upload file)
var fs = require("fs");
http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/html"});
	// lay file
	var data = fs.readFileSync(__dirname + "/index.html", "utf-8");
	data = data.replace("{NAME}", "Hieutran");
	res.end(data);
}).listen(7777);
