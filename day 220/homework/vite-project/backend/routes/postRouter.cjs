const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.cjs')
const { addPost, deletePost, getAllPosts, getPostById } = require('../controllers/postController.cjs')
const { addReply } = require('../controllers/replyController.cjs')

router.post('/', auth, addPost)
router.post('/:postId/replies', auth, addReply)

router.delete('/:id', auth, deletePost)

router.get('/', getAllPosts)
router.get('/:id', getPostById)

module.exports = router