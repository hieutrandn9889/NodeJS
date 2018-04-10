var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;

// create foler routes co 2 file index va users
var routes = require('./routes/index');
var users =  require('./routes/users');

// Init App
var app = express();

// view engine
app.set('views', path.join(__dirname, 'views')); // chi duong dan den views
app.engine('handlebars', handlebars({defaultLayout:'layout'})); // co o day la  default Layout folder co file layout.handlebars
app.set('view engine', 'handlebars'); // view engine là handlebars

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set Static Folder
app.use(express.static('public'));

// Express Session
app.use(session({
  // bảo mật
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init ==> call initialize va session
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// connect flash
app.use(flash());

// Global Vars  flash message
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

//dùng để gọi qua bên 
// router.get("/", function(req, res){
//  res.render("index");
// });
// route dung cho index cho đoạn này
//var routes = require('./routes/index');
//var users =  require('./routes/users');
app.use('/', routes);
app.use('/users', users);

// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server started on port '+app.get('port'));
});