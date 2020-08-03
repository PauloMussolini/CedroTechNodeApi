var fs = require('fs');

function saveFile(userData, fileName){
  fs.writeFile(`./data/${fileName}.txt`, userData, function (err) {
      if (err) throw err;
    });  
}
module.exports = saveFile;