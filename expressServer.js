var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//setting middleware
app.use(express.static(__dirname + 'public')); //Serves resources from public folder
//Serves all the request which includes /images in the url from Images folder
// Access http://localhost:5000/images/Harsh.jpg will display picture.
app.use('/res', express.static(__dirname + '/images'));

// define routes here..
/*app.get('/', function (req, res) {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});*/

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit-data', function (req, res) {
  res.send('POST Request');
});

app.put('/update-data', function (req, res) {
  res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
  res.send('DELETE Request');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});