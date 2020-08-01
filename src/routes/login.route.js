const express = require('express');
const router = express.Router();
const controller = require('../controllers/login.controller');

router.post('/', controller.post);
// router.post('/consult-mutual-claims', [generateClaimFactoryInstance], controller.postConsultMutual);
// router.post('/consult-claims', [generateClaimInstance], controller.postConsultInsuranceClaim);
// router.put('/', [generateClaimInstance], controller.put);

module.exports = router;