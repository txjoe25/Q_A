var express = require('express');
var bodyParser = require('body-parser'); // for reading POSTed form data into `req.body`
var expressSession = require('express-session');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'client')));
app.set('views', path.join(__dirname, 'client'));

app.use(expressSession({
  secret:'secrettokenhere',
  resave: false,
  saveUninitialized: true,
  rolling: true
}));
app.use(bodyParser.json());

require(path.join(__dirname, 'server/config/mongoose.js'));

var routes_setter = require(path.join(__dirname, 'server/config/routes'));
routes_setter(app);

app.listen(8000);
