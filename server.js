// Dependencies
// =============================================================
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require("body-parser");
var methodOverride = require('method-override')

// Sync to the DB before starting the server
// =============================================================
var db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ 
    defaultLayout: "main" 
  })
);
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");
app.use(routes);

var PORT = process.env.PORT || 8080;
db.sequelize.sync().then(function () {  
	app.listen(PORT, function() {
	    console.log("I\'m listening... on port " + PORT);
	})
});