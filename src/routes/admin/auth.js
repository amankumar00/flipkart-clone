const express = require('express');
const { signup, signIn, requireSignIn } = require('../../controller/admin/auth');
const { validateSignUpRequest, isRequestValidated, validateSignInRequest } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signIn',validateSignInRequest,isRequestValidated, signIn);

router.post('/admin/signUp', validateSignUpRequest, isRequestValidated, signup);

// router.post('/admin/profile', requireSignIn, (req,res)=>{
//     res.status(200).json({user: 'profile'})
// });

module.exports = router;