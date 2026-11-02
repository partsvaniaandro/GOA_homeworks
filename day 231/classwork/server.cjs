const express = require('express')
const app = express()
const PORT = 3009
const Database = require('better-sqlite3')

const db = new Database('app.db')

app.use(express.json())

db.prepare(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER,
    name TEXT,
    age INTEGER)`.run())
db.prepare(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER,
    name TEXT,
    age INTEGER)`.run())

app.get('/items', (req, res) => {
    const items = db.prepare(`SELECT * FROM items`).all()
    res.json(items)
})
app.get('/items/:id', (req, res) => {
    const item = db.prepare(`SELECT * FROM items WHERE id = ?`).get(req.params.id)
    if(!item) return res.status(404).json({ message: 'Item not found' })
    res.json(item)
})

app.get('/users', (req, res) => {
    const users = db.prepare(`SELECT * FROM users`).all()
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(req.params.id)
    if(!user) return res.status(404).json({ message: 'User not found' })
    res.json(user)
})

app.listen(PORT, () => console.log(`server live on http://localhost:${PORT}`))