var express = require("express");
// express router
var router = express.Router();

// get homepage
// render view call index
router.get("/", ensureAuthenticated, function(req, res){
	res.render("index");
});

// vd login vao moi cho download dc
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}else{
		req.flash('error_msg', 'You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;