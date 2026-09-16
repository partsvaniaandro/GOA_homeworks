const db = require('../utils/db.cjs')
const crypto = require('crypto')
function addReply(req, res){
    const postId = req.params.postId
    const body = req.body.body
    if(!postId){
        return res.status(400).json({ message: 'Id was not provided' })
    }
    if(!body){
        return res.status(400).json({ message: 'Reply is empty' })
    }
    const posts = db.readData('posts.json')
    const post = posts.find(el => el.id === postId)
    if(!post){
        return res.status(404).json({ message: 'Post not found' })
    }
    const userId = req.user.userId
    const replies = db.readData('replies.json')
    const reply = {
        id: crypto.randomUUID(),
        postId: postId,
        userId: userId,
        body: body,
        createdAt: new Date().toISOString()
    }
    replies.push(reply)
    db.writeData('replies.json', replies)
    return res.status(201).json(reply)
}

function deleteReply(req, res){
    const targetId = req.params.id
    const requester = req.user.userId
    const replies = db.readData('replies.json')
    const reply = replies.find(el => el.id === targetId)
    if(!reply){
        return res.status(404).json({ message: 'reply could not found' })
    }
    if(reply.userId !== requester){
        return res.status(403).json({ message: 'not authorized' })
    }
    const filteredReplies = replies.filter(el => el.id !== targetId)
    db.writeData('replies.json', filteredReplies)
    res.status(200).json({ message: 'reply deleted' })
}

module.exports = { addReply, deleteReply }