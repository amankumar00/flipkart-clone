const express = require("express");
const { signup, signIn} = require("../controller/auth");

const { validateSignUpRequest, isRequestValidated, validateSignInRequest } = require("../validators/auth");
const router = express.Router();

router.post("/signIn",validateSignInRequest,isRequestValidated, signIn);

router.post("/signUp",validateSignUpRequest, isRequestValidated, signup);

// router.post('/profile', requireSignIn, (req,res)=>{
//     res.status(200).json({user: 'profile'})
// });

module.exports = router;
