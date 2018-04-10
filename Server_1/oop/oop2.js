// tạo 1 class truyền tham số
function KhoaHoc(ten, hocphi){
	// trỏ đến thuộc tính
	this.Ten = ten;
	this.HocPhi = hocphi;
}
// phương thức
KhoaHoc.prototype.mota = function(){
	console.log("Hello " + this.Ten + " " + this.HocPhi);
}
// đối tượng
var kh = new KhoaHoc("Notejs", 800);
// đối tượng dùng phương thức
kh.mota();