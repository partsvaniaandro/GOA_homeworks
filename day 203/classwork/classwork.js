const http = require('node:http');

const todos = [
]

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*') // everything as an origin / fake store API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    if(req.method === 'OPTIONS') {
        res.writeHead(204)
        res.end()
        return
    }
    
    if(req.method === 'GET' && req.url === '/todos') {
        res.writeHead(200, {"content-type": 'application/json'})
        res.end(JSON.stringify(todos))
        return
    }

    if(req.method === 'POST' && req.url === '/todos') {
        let body = ''
        req.on('data', chunk => body += chunk)
        req.on('end', () => {
            const { text } = JSON.parse(body)
            const todo = { id:Date.now(), text }
            todos.push(todo)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(todo))
        })
    }

    if(req.method === 'DELETE' && req.url.startsWith('/todos/')) {
        const id = Number(req.url.split('/')[2])
        const index = todos.findIndex(item => item.id === id)
        if(index !== -1){
            todos.splice(index, 1)
        }
        res.writeHead(204)
        res.end()
        return
    }
})

server.listen(3008, () => console.log('server is live'))