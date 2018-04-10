var express = require("express");
var app = express();
app.listen(3000, function(){
	console.log('Connected mongodb');
});
// su dung ejs module
app.set("view engine","ejs");
app.set("views","./views");
// post
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// su dung multer module
var multer   = require("multer");
var mongoose = require("mongoose");
// connect db mongodb trong đó cookies là tên của db
mongoose.connect('mongodb://localhost/cookies');
var dbMongo = mongoose.connection;
// lắng nge kết nối db
dbMongo.on('err',console.error.bind(console,'connect error'));
dbMongo.once('onpen', function(){
	console.log("Mongodb connect");
});
// tạo schema , mỗi schema sẽ match với collection trong mongodb xác định mỗi document trong collection
var Schema = new mongoose.Schema({
	type : String,
	banh : [{
		name  : String,
		image : String,
		mota  : String
	}]
});
// sử dụng csdl sẽ gọi product 
var product = mongoose.model('sanpham', Schema);
// upload
var storage = multer.diskStorage({
	// bo vao folder uploads
	destination : function(req, file, cb){
		cb(null,'./public/uploads')
	},
	// dat ten file
	filename : function(req, file, cb){
		cb(false, file.originalname)
	}
});
// single file upload len
var upload = multer({
	storage: storage
}).single('file');
// chuyen den produc_type cho post nguoi dung nhap vao để đưa vào db
app.post("/product_types",urlencodedParser, function(req, res){
	upload(req, res, function(err){
		// kiem tra err 
		if(err){
			console.log(err);
			res.send("Ket noi that bai")
		}
		// insert csdl vao db
		else{
			// theo dan json trong ten : loai banh nguoi dung nhap vao; image: upload len; mota: do người dùng nhập vào
			var sp = {"name": req.body.ten, "image": req.file.originalname, "mota": req.body.mota};
			// sẽ đc upload qua trường product đã gọi trên
			// trong đó type do người dùng chọn, để insert "banh"
			product.findOneAndUpdate({type: req.body.loai}, {$push:{banh:sp}}, function(err, result){
				console.log(result);
			});
			// xuất ra bên các loại bánh cakes, cookies, cupcakes, macarons
			res.render("type");
		}
	});
});
app.get("/",function(req, res){
	res.render("form");
});

// hàm global cho /public
app.use(express.static(__dirname + '/public'));
//xây dựng row cho từng loại sản phẩm
app.get("/cakes", function(req, res){
	// du lieu trong 1 loai sẽ nằm trong cái filter là bánh
	var mang = [];
	// lấy ra các sp của 1 loại
	product.find({type:"cakes"}, function(err, result){
		result.forEach( function(sp) {
			mang = sp.banh;
		});
		console.log(mang);
		res.render("sp", {mang});
	});
	
});
app.get("/cupcakes", function(req, res){
	// du lieu trong 1 loai sẽ nằm trong cái filter là bánh
	var mang = [];
	// lấy ra các sp của 1 loại
	product.find({type:"cupcakes"}, function(err, result){
		result.forEach( function(sp) {
			mang = sp.banh;
		});
		console.log(mang);
		res.render("sp", {mang});
	});
	
});
app.get("/macarons", function(req, res){
	// du lieu trong 1 loai sẽ nằm trong cái filter là bánh
	var mang = [];
	// lấy ra các sp của 1 loại
	product.find({type:"macarons"}, function(err, result){
		result.forEach( function(sp) {
			mang = sp.banh;
		});
		console.log(mang);
		res.render("sp", {mang});
	});
	
});
app.get("/cookies", function(req, res){
	// du lieu trong 1 loai sẽ nằm trong cái filter là bánh
	var mang = [];
	// lấy ra các sp của 1 loại
	product.find({type:"cookies"}, function(err, result){
		result.forEach( function(sp) {
			mang = sp.banh;
		});
		console.log(mang);
		res.render("sp", {mang});
	});
});

