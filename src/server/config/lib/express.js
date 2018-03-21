'use strict';

const config = require('../config');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const passport = require('passport');
const hbs = require('express-hbs');

exports.initMiddleware = function (app) {
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(cookieParser());
};

exports.initViewEngine = function (app) {
	// Serve static files
	app.use(express.static(path.resolve('./public')));

	// Express handlebars
	app.engine('hbs', hbs.express4({
		layoutsDir: './src/server/views/layout'
	}));
	app.set('view engine', 'hbs');
	app.set('views', './src/server/views');
};


exports.initSession = function (app) {

	//var app = express()
	var sess = {
	  secret: 'keyboard cat',
	  cookie: {secure: false, maxAge:86400000}
  };

	if (app.get('env') === 'production') {
		app.set('trust proxy', 1) // trust first proxy
		sess.cookie.secure = true // serve secure cookies
	}

	app.use(session(sess))
};

exports.initModulesServerRoutes = function (app, passport) {
	// require(path.join(__rootdir, '/modules/users/routes/users.routes'))(app);
	require('../../modules/state/routes/state.routes')(app);
	require('../../modules/customer/routes/authentication.routes')(app);
	require('../../modules/customer/routes/customer.routes')(app);
	require('../../modules/customer/routes/title.routes')(app);
	require('../../modules/addressbook/routes/address.routes')(app);
	require('../../modules/catalogue/routes/category.routes')(app);
	require('../../modules/basket/routes/basket.routes')(app);

	app.use('*', function (req, res) {
	  res.render('index');
	});
};

exports.initPassport = function (app) {
	//app.use(session(config.express.session));
	app.use(passport.initialize());
	app.use(passport.session());
	require('./passport').init(passport);
};

exports.init = function () {
	let app = express();

	this.initMiddleware(app);
	this.initViewEngine(app);
	this.initSession(app);
	this.initPassport(app);
	this.initModulesServerRoutes(app);

	return app;
};
