const express = require('express')
const router = express.Router()
const welcomeController = require('../controllers/welcomeController.cjs')

router.get('/', welcomeController.getWelcome)

module.exports = router