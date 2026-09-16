const express = require('express')
const router = express.Router()

const welcomeController = require('../controller/welcomeController.cjs')
const loggerMiddleware = require('../middleware/loggerMiddleware.cjs')

router.get('/', loggerMiddleware.logger ,welcomeController.getWelcome)

module.exports = router