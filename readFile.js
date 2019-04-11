var fs = require('fs');
fs.readFile('readFile.js', function (err, data) {
  debugger;
  if (err) throw err;
  console.log(data.toString());
});
//console.log(fs.readFileSync('readFile.js').toString());