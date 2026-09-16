const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.cjs')
const { deleteReply } = require('../controllers/replyController.cjs')

router.delete('/:id', auth, deleteReply)

module.exports = router