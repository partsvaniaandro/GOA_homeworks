const db = require('../utils/db.cjs')
const crypto = require('crypto')
function addPost (req, res){
    const title = req.body.title
    const body = req.body.body
    if(!title || !body){
        return res.status(400).json({ message: 'Title and Body are required' })
    }
    
    const userId = req.user.userId
    const posts = db.readData('posts.json')
    const newPost = {
        id: crypto.randomUUID(),
        userId: userId,
        title: title,
        body: body,
        createdAt: new Date().toISOString()
    }

    posts.push(newPost)
    db.writeData('posts.json', posts)

    res.status(201).json(newPost)
}

function deletePost(req, res){
    const targetId = req.params.id
    const requester = req.user.userId
    const posts = db.readData('posts.json')

    const post = posts.find(el => el.id === targetId)
    if(!post){
        return res.status(404).json({ message: 'post could not be found' })
    }

    if(post.userId !== requester){
        return res.status(403).json({ message: 'not authorized' })
    }
    const filteredPosts = posts.filter(el => el.id !== targetId)

    db.writeData('posts.json', filteredPosts)
    
    res.status(200).json({ message: 'post deleted' })
}

function getAllPosts(req, res){
    const posts = db.readData('posts.json')
    const users = db.readData('users.json')

    const summaries = posts.map(post => {
        const author = users.find(user => user.id === post.userId)
        const username = author ? author.username : 'Unknown user'
        return {
            id: post.id,
            username: username,
            title: post.title,
            createdAt: post.createdAt
        }
    })

    res.status(200).json(summaries)
}

function getPostById(req, res){
    const posts = db.readData('posts.json')
    const users = db.readData('users.json')
    const replies = db.readData('replies.json')

    const post = posts.find(post => post.id === req.params.id)

    if(!post){
        return res.status(404).json({ message: 'post could not be found' })
    }

    const author = users.find(user => user.id === post.userId)
    const username = author ? author.username : 'Unknown user'

    const postReplies = replies.filter(reply => reply.postId === post.id)

    const resolvedReplies = postReplies.map(reply => {
        const author = users.find(user => user.id === reply.userId)
        const username = author ? author.username : 'Unknown user'
        return {
            id: reply.id,
            username: username,
            body: reply.body,
            createdAt: reply.createdAt,
            postId: reply.postId
        }
    })
    
    res.status(200).json({
        id: post.id,
        username: username,
        title: post.title,
        body: post.body,
        createdAt: post.createdAt,
        replies: resolvedReplies
    })
}

module.exports = { addPost, deletePost, getAllPosts, getPostById }