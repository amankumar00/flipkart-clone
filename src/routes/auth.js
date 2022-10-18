const express = require('express');
const { signup, signIn } = require('../controller/auth');
const router = express.Router();


router.post('/signIn', signIn);

router.post('/signUp', signup);

module.exports = router;