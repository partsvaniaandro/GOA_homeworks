const express = require('express')
const router = express.Router()
const postIdController = require('../controllers/postIdController.cjs')

router.get('/:userId/posts/:postId', postIdController.getPostId)

module.exports = router