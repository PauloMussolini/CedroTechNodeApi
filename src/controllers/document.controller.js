'use strict';
const returnDocumentValidations = require('../validations/document.validations');
const saveFile = require('../services/file.service');

exports.post = async (req, res, next) => {
    try{
        const resultValidation = returnDocumentValidations(req);
        if (!resultValidation.isValid) {
            return res.status(400).send({
                success: false,
                errors: resultValidation.errors
            });
        }
        let ip_details = req.socket.address();
        let userData = `Nome Completo: ${req.body.FullName} \n`+
                        `Data de Nascimento: ${req.body.BornDate} \n`+
                        `CPF: ${req.body.CPF} \n`+
                        `RG: ${req.body.RG} \n\n` +
                        `Usuario Autenticado \n` +
                        `Login: ${req.email} \n` +
                        `IP: ${ip_details.address}`

        saveFile(userData, req.body.FullName);

        return res.status(201).send({
            success: true,
            message: ['Document Created!']
        });    
    } catch{
        return res.status(500).send({
            auth: false,
            success: false,
            message: 'Internal error'
        });
    }
 //   next();
}