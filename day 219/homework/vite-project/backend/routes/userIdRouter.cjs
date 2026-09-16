const express = require('express')
const router = express.Router()

const userIdController = require('../controller/userIdController.cjs')
const loggerMiddleware = require('../middleware/loggerMiddleware.cjs')

router.get('/user/:userId', loggerMiddleware.logger, userIdController.getUserId)

module.exports = router