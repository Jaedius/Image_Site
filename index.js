const express = require("express");

const app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/home.html");
});

app.listen(4001, function() {
	console.log("Now listening to port 4001 for requests...");
});
