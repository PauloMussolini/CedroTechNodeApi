const express = require('express');
const router = express.Router();
const controller = require('../controllers/document.controller');

router.post('/', controller.post);

module.exports = router;