const express = require('express')
const router = express.Router()

const postIdController = require('../controller/postIdController.cjs')
const loggerMiddleware = require('../middleware/loggerMiddleware.cjs')

router.get('/user/:userId/posts/:postId', loggerMiddleware.logger, postIdController.getPostId)

module.exports = router