function tong(a,b){
	return a + b;
}
// khai bao 1 bien de lay ham return
var x = tong(5,7);
console.log(x);
// goi ham khac thong qua ham
function hello(){
	console.log('Hieutran');
}
function goiHam(fn){
	fn();
}
goiHam(hello);

// khai bao bien thong qua ham gì do
var tong = function(){
	console.log('Hieutran goi qua bien');
}
tong();