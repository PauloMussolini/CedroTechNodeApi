const Validation = require('./fluent.validator');

function DocumentValidations(req) {

    let ValidationDocument = new Validation();

    const { FullName, BornDate,  CPF, RG } = req.body; 

    ValidationDocument.isRequired(FullName, 'Document information is missing or invalid (FullName is required)');
    ValidationDocument.isRequired(BornDate, 'Document information is missing or invalid (BornDate is required)');
    ValidationDocument.isRequired(CPF, 'Document information is missing or invalid (CPF is required)');
    ValidationDocument.isRequired(RG, 'Document information is missing or invalid (RG is required)');
    ValidationDocument.isValidDate(BornDate, 'Document information is missing or invalid (BornDate invalid!)');

    return {
        isValid: ValidationDocument.isValid(),
        errors: ValidationDocument.errors()
    };
};

module.exports = DocumentValidations;