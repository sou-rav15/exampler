const express = require('express');
const registerUserController = require('../controllers/user.controller.js');
const verifyEmailController = require('../controllers/user.verifyEmail.controller.js');
const loginController= require('../controllers/user.login.controller.js');
const auth = require('../middleware/auth.js');
const logoutController = require('../controllers/user.logout.js');
const uploadAvator= require('../controllers/uploaduserAvatar.controller.js');
const upload = require('../middleware/multer.js');
const updateUserDetails = require('../controllers/updateuserProfile.js');
const router = express.Router();
router.post('/register-user',registerUserController) 
router.post('/verify-email,',verifyEmailController)
router.post('/login', loginController)
router.get('/logout', auth, logoutController);
router.put('/upload-avatar', auth,upload.single('avator'), uploadAvator);
router.put('/update-details', auth,updateUserDetails)
module.exports =router;               