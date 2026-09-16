const express = require('express')
const router = express.Router()
const usersIdController = require('../controllers/userIdController.cjs')

router.get('/:userId', usersIdController.getUserId)

module.exports = router