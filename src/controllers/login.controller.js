'use strict';

exports.post = async (req, res, next) => {
        res.status(201).send({
            success: true,
            message: 'User Logged!',
            token: 'Token...'
        });
}