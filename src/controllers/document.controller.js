'use strict';

exports.post = async (req, res, next) => {
        res.status(200).send({
            success: true,
            message: 'Document Created!'
        });
}