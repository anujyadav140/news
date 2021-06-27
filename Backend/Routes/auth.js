const express = require('express')
const authController = require('../Controllers/auth')
const auth = require("../Middleware/auth")

const router = express.Router();

router.post('/signup' , authController.signup)
router.post('/login', authController.login)
router.get('/user/:username', auth,  authController.user)
module.exports = router

