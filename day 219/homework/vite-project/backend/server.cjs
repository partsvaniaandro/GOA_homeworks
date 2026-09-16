const app = require('./app.cjs')

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server live at http://localhost:${PORT}`)
})