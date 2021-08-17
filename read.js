let fs = require('fs')
fs.readFile('unrecognized_requests.txt', 'utf8', function(err, data){console.log(data)})
