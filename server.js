var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('assests'));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});


app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


app.listen(3000, function() {
    console.log("LISTENING!");
});
