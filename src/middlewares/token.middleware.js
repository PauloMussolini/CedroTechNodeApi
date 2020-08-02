'use strict';
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

function validToken(req, res, next){

  if (!req.headers['authorization']) return res.status(401).json({ sucess: false, errors: ['No token provided.'] });


  //  var token = req.get('Authorization').substring(7);
  var token = '';
    if (req.headers['authorization'].indexOf('Bearer') == 0)
      token = req.get('Authorization').substring(7);
    else
      token = req.get('Authorization');

console.log(token);
// console.log(req.headers['authorization']);

    // if (!token){
    //    return
    //     res.status(401).json({
    //         auth: false,
    //         description: "No token provided."
    //     });
    // }

// console.log('----------------- token ----------------------');
// console.log(req.body);
// console.log(req.headers);
// console.log('----------------- token2 ----------------------');
 //console.log(token);

  //  if (!token) return res.status(401).json({ sucess: false, description: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
     //   console.log('Err...: ',err.expiredAt);

      if (err){
          if (err.expiredAt)
            return res.status(401).json({ sucess: false, errors: ['Token has finished!'] });
          else
            return res.status(401).json({ sucess: false, errors: ['Failed to authenticate token.'] });
      } 

      
    //  console.log('passou');
   //   console.log(new Date().getTime() + 1);
   //   req.id = decoded.id;
        // if (decoded.exp <= (new Date().getTime() + 1) / 1000) {
        //     res.json(400, {error: 'Acesso Expirado, faça login novamente'});
        // }
       // req.auth = decoded
    //    console.log(decoded);
    //    decoded.iat = new Date().getTime() + parseInt(decoded.exp);
       // console.log(decoded.email);

        const email = decoded.email;

    // var token = jwt.sign( { email } , process.env.SECRET, {
    //     expiresIn: 60 // 10 mins
    //   });

    // res.status(200).send({
    //     auth: true,
    //     success: true,
    //     message: 'User Logged!',
    //     token: token
    // });
      req.email = email;
      next();
    });
}

module.exports = validToken;