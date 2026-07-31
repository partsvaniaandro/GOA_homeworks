const http = require('node:http')
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 3008

const posts = []

app.use(cors())
app.use(express.json())

app.post('/posts', (req, res) => {
    const {title, text} = req.body
    const newPost = {
        id: Date.now(),
        title,
        text,
        creationDate: new Date().toISOString()
    }

    posts.push(newPost)

    res.status(200).json(newPost)
})

app.listen(PORT, () => {
    console.log(`server listening on on port ${PORT}`)
})