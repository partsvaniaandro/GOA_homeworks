const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profileController.cjs')

router.get('/', profileController.getProfile)

module.exports = router