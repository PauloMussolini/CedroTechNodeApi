var fs = require('fs');

function createFile(req, res, next){

  
let ip_details = req.socket.address();
console.log(ip_details);

    let userData = `Nome Completo: ${req.body.FullName} \n`+
                   `Data de Nascimento: ${req.body.BornDate} \n`+
                   `CPF: ${req.body.CPF} \n`+
                   `RG: ${req.body.RG} \n\n` +
                   `Usuario Autenticado \n` +
                   `Login: ${req.email} \n` +
                   `IP: ${ip_details.address}`
    
    fs.writeFile('./data/log.txt', userData, function (err) {
        if (err) throw err;
      });  
      next();
}


module.exports = createFile;