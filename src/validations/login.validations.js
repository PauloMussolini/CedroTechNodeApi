const Validation = require('./fluent.validator');

function returnLoginValidations(req) {

    let ValidationLogin = new Validation();

    const { email, password } = req.body; 

    ValidationLogin.isRequired(email, 'Authorization information is missing or invalid (email is required)');
    ValidationLogin.isRequired(password, 'Authorization information is missing or invalid (password is required)');
    !ValidationLogin.isEmail(email, 'Authorization information is missing or invalid (email invalid!)');

    return {
        isValid: ValidationLogin.isValid(),
        errors: ValidationLogin.errors()
    };
};

module.exports = returnLoginValidations;