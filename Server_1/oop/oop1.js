// khai bao class
var person = {
	ho  	: "tran", // thuoc tinh
	ten 	: "hieu", // thuoc tinh
	// phuong thuc
	chaomung: function (){
		console.log("chao ban " + this.ho + " " + this.ten);
	}
}
// ham static de dùng đưa person ra
person.chaomung();
// xuat ra ten
console.log(person["ten"]);