const express = require('express');
const { signup, signIn, requireSignIn } = require('../controller/auth');
const router = express.Router();


router.post('/signIn', signIn);

router.post('/signUp', signup);

// router.post('/profile', requireSignIn, (req,res)=>{
//     res.status(200).json({user: 'profile'})
// });

module.exports = router;