'use strict';
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

const returnLoginValidations = require('../validations/login.validations');

exports.post = async (req, res, next) => {

    try{

        const resultValidation = returnLoginValidations(req);
        if (!resultValidation.isValid) {
            return res.status(400).send({
                success: false,
                errors: resultValidation.errors
            });
        }

        const { email, password } = req.body;

        // Valida usuário (Em memória, conforme permitido)
        if (email !== "paulo_mussolini@yahoo.com.br" || password !== "Secret"){
            return res.status(401).send({
                success: false,
                description: "Unauthorized"
            });
        }

        var token = jwt.sign({ email }, process.env.SECRET, {
            expiresIn: 600 // 10 mins
        });

        return res.status(200).send({
            auth: true,
            success: true,
            message: 'User Logged!',
            token: token
        });
    } catch {
        return res.status(500).send({
            auth: false,
            success: false,
            message: 'Internal error'
        });
    }

}