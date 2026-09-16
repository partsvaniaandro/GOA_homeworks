const db = require('../utils/db.cjs')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
async function registerUser (req, res){
    let password = req.body.password
    let username = req.body.username
    if(!password || !username){
        return res.status(400).json({ message: 'Username and Password are required' })
    }
    username = username.toLowerCase()
    if(password.length < 8){
        return res.status(400).json({ message: 'Password should contain 8 or more symbols' })
    }
    
    const users = db.readData('users.json')

    const existingUser = users.find(el => el.username === username)
    if(existingUser){
        return res.status(409).json({ message: 'Username already taken' })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = {
        id: crypto.randomUUID(),
        username: username,
        passwordHash: passwordHash
    }

    users.push(newUser)
    db.writeData('users.json', users)

    res.status(201).json({
        id: newUser.id,
        username: newUser.username
    })  
}
async function loginUser (req, res){
    let password = req.body.password
    let username = req.body.username
    if(!password || !username){
        return res.status(400).json({ message: 'Username and Password are required' })
    }
    username = username.toLowerCase()

    const users = db.readData('users.json')

    const existingUser = users.find(el => el.username === username)
    if(!existingUser){
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, existingUser.passwordHash)

    if(!isMatch){
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ userId: existingUser.id }, process.env.JWT_SECRET)
    res.status(200).json({
        token: token,
        id: existingUser.id,
        username: username
    })
}

function getUser(req, res){
    const id = req.params.id
    const users = db.readData('users.json')
    const posts = db.readData('posts.json')

    const user = users.find(el => el.id === id)

    if(!user){
        return res.status(404).json({ message: 'user not found' })
    }

    const userPosts = posts.filter(el => el.userId === user.id)

    res.status(200).json({
        id: user.id,
        username: user.username,
        posts: userPosts
    })
}

module.exports = { registerUser, loginUser, getUser }