const express = require('express')
const app = express()
const cors = require('cors')

const welcomeRouter = require('./routes/welcomeRouter.cjs')
const aboutRouter = require('./routes/aboutRouter.cjs')
const contactRouter = require('./routes/contactRouter.cjs')
const userIdRouter = require('./routes/userIdRouter.cjs')
const postIdRouter = require('./routes/postIdRouter.cjs')

app.use(cors())

app.use(express.json())

app.use(welcomeRouter)
app.use(aboutRouter)
app.use(contactRouter)
app.use(userIdRouter)
app.use(postIdRouter)

module.exports = app