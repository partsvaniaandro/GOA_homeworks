const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/userRouter.cjs')
const postRouter = require('./routes/postRouter.cjs')
const replyRouter = require('./routes/replyRouter.cjs')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/replies', replyRouter)

module.exports = app