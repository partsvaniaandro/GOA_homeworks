const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello Express!')
})

app.get('/about', (req, res) => {
    res.send('This is the About page')
})

app.get('/contact', (req, res) => {
    res.json({
        email: 'ablabudaandro2@gmail.com',
        number: '596971919'
    })
})



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})