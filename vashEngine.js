var express = require('express');
var app = express();

app.set("view engine","vash")

app.get('/', function (req, res) {
  res.render('Sample', { 
    title: 'Vash Template Demo', 
    content:'This is dummy paragraph.'});
});

var server = app.listen(5000, function () {
  console.log('Node server is running..');
});