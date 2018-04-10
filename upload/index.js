var express = require("express");
var multer = require("multer");
var app = express();
// connect web port 3000
app.listen(3000, function(){
	console.log('Connected server');
});
//ejs
app.set("view engine", "ejs");
// khai bao layout nằm trong views để biết
app.set("views", "./views");
app.get("/", function(req, res){
	res.render("form");
});
// noi luu tru file tai len
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  	// noi luu tru uploads folder
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
  	// dat ten dung voi ten goc
    cb(null, file.originalname);
  }
});
// khai bao bien luu tru
var upload = multer({storage:storage});
// tai 1 file ==> upload.single('giatri ten trong form') 
app.post('/upload', upload.single('file'), function (req, res) {
	// tai len va thong tin cua file
	console.log(req.file);
  	//thong bao message thanh cong
  	res.send('UPLOAD thanh cong');
});