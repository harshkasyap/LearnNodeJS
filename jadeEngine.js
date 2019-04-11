var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;

//set view engine
app.set("view engine","jade")

app.get('/', function (req, res) {
  // Connect to the db
  MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
    if(err) throw err;      
    db.collection('test', function (err, collection) {  
      if(err) throw err;    
      collection.find().toArray(function(err, items) {
        if(err) throw err;    
        console.log(items);            
        res.render('Sample', { studentList: items});
      });
    });
  });
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});