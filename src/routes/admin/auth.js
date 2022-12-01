const express = require('express');
const { signup, signIn, requireSignIn } = require('../../controller/admin/auth');
const router = express.Router();


router.post('/admin/signIn', signIn);

router.post('/admin/signUp', signup);

// router.post('/admin/profile', requireSignIn, (req,res)=>{
//     res.status(200).json({user: 'profile'})
// });

module.exports = router;