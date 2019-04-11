var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
  if(err) throw err;      
  /*db.collection('test').count(function (err, count) {
      if (err) throw err; 
      console.log('Total Rows: ' + count);
  });     */      

  db.collection('test', function (err, collection) {  
    if(err) throw err;    
    collection.count(function (err, count) {
      if (err) throw err; 
      console.log('Total Rows: ' + count);
    });

    // Not Working!
    collection.update({_id: "5cae07f4d65cfab5565794b7"}, { $set: { name: 'NodeJS developer'} },
      function(err, result){
        if(err) throw err;    
        console.log('Document Updated Successfully');
    });

    collection.find().toArray(function(err, items) {
      if(err) throw err;    
      console.log(items);            
    });
  });
});