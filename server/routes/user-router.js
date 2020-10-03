const express = require('express');
const userCtrl = require('../controllers/user-ctrl');
const router = express.Router();

const passport = require('passport');

router.post('/auth-user',userCtrl.authUser);
router.post('/create-user', userCtrl.createUser);
router.post('/upload-image',passport.authenticate('jwt', {session:false}),userCtrl.addImage);
router.post('/get-uploads', passport.authenticate('jwt', {session:false}), userCtrl.giveImage);

module.exports = router;