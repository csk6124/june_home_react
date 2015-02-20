// Require our dependencies
var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  path = require('path'),
  mongoose = require('mongoose');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 9000;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

// Connect to our mongo database
mongoose.connect('mongodb://localhost/react-tweets');

// Set /public as our static content dir

var staticPath = path.join(__dirname, '../', 'dist/');
app.use("/", express.static(staticPath));

// Fire this bitch up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});
