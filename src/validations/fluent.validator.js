'use strict';

let errors = [];

function Validation() {
    errors = [];
}

Validation.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

Validation.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

Validation.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

Validation.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

Validation.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}



Validation.prototype.exists = (value, message) => {
    if (typeof value === 'undefined')
        errors.push({ message: message });
}

Validation.prototype.isValidDate = (value, message) => {
    var date = new Date(value);
    if(date.getTime() - date.getTime() !== 0) 
        errors.push({ message: message });
}

Validation.prototype.errors = () => { 
    return errors; 
}

Validation.prototype.clear = () => {
    errors = [];
}

Validation.prototype.isValid = () => {
    return errors.length == 0;
}

Validation.prototype.isAddressValid = (address, message) => {
    try {
        ethers.utils.getAddress(address)
    }catch {
        errors.push({ message: message + address });
    }
}

module.exports = Validation;