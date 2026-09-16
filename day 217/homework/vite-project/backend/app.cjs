const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use('/welcome', require('./routers/welcomeRouter.cjs'))
app.use('/profile', require('./routers/profileRouter.cjs'))
app.use('/users', require('./routers/usersIdRouter.cjs'))
app.use('/users', require('./routers/postIdRouter.cjs'))
app.use('/products', require('./routers/productsRouter.cjs'))

module.exports = app