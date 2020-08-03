'use strict';
const returnDocumentValidations = require('../validations/document.validations');

exports.post = async (req, res, next) => {

    try{
        const resultValidation = returnDocumentValidations(req);
        if (!resultValidation.isValid) {
            return res.status(400).send({
                success: false,
                errors: resultValidation.errors
            });
        }
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

}