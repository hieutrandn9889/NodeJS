// tên biến phải viết hoa Hieutran
// Biến Hieutran sẽ có những trạng thái: em bé lớn lên, em bé đi học...
var Hieutran = React.createClass({
	// render đi với hành dộng
	render:function(){
		return(
		<div>
			<h1 className="tomau"> Hieu Tran </h1>
			<hr/>
			<h1 className="tomau"> Hehe </h1>
		</div>
		 );
	}
}); 

ReactDOM.render(
	<div>
		<Hieutran/>
		<Hieutran/>
		<Hieutran/>
	</div> 
	, document.getElementById("root"));
