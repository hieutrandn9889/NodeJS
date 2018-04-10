var express = require ("express");
var app = express();
// khách hàng gởi lên server thì vào public mà tìm
app.use(express.static("public"));
app.set("view engine", "ejs");
// có nhiều trang và mỗi trang có mỗi giao diện nên bổ views
app.set("views", "./views");
app.listen(3000);
// tạo route
app.get("/", function(req, res){
	res.render("trangchu");
});