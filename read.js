let fs = require('fs')
let file_readed
fs.readFile('unrecognized_requests.txt', 'utf8', function(err, data){
    file_readed = data
})
console.log(file_readed)