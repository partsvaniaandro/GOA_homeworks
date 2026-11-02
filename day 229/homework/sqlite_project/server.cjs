const express = require('express')
const Database = require('better-sqlite3')

const app = express()
const PORT = 3000

const db = Database('project.db')
db.exec('CREATE TABLE IF NOT EXISTS items ()')