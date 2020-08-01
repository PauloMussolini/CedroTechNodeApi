'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Cedro Tech Api',
        version: '1.0.0',
        description: 'Teste avaliatório da Cedro Tech para BTG Pactual'
    });
});

module.exports = router;