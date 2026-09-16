const express = require('express')
const router = express.Router()

const contactController = require('../controller/contactController.cjs')
const loggerMiddleware = require('../middleware/loggerMiddleware.cjs') 

router.get('/contact', loggerMiddleware.logger, contactController.getContact)

module.exports = router