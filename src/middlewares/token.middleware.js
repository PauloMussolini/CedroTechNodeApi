'use strict';
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

function validToken(req, res, next){
  if (!req.headers['authorization']) return res.status(401).json({ sucess: false, errors: ['No token provided.'] });

  var token = '';
    if (req.headers['authorization'].indexOf('Bearer') == 0)
      token = req.get('Authorization').substring(7);
    else
      token = req.get('Authorization');

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
    
    if (err){
      if (err.expiredAt)
        return res.status(401).json({ sucess: false, errors: ['Token has finished!'] });
      else
        return res.status(401).json({ sucess: false, errors: ['Failed to authenticate token.'] });
    } 

      const email = decoded.email;

      req.email = email;
      next();
     
    });
}

module.exports = validToken;