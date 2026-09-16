const express = require('express')
const router = express.Router()

const aboutController = require('../controller/aboutController.cjs')
const loggerMiddleware = require('../middleware/loggerMiddleware.cjs')

router.get('/about', loggerMiddleware.logger ,aboutController.getAbout)

module.exports = router