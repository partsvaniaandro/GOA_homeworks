const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const server = http.createServer((req, res) => {
    const reqUrl = new URL(req.url, `http://${req.headers.host}`)

    if (reqUrl.pathname === '/') {
        const html = fs.readFileSync(path.join(__dirname, 'index.html'))
        res.writeHead(200, { 'Content-Type': 'text/html' })
        return res.end(html)
    }

    if (reqUrl.pathname === '/calculate') {
        const num1 = reqUrl.searchParams.get('num1')
        const num2 = reqUrl.searchParams.get('num2')

        if (!num1 || !num2) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ error: 'Please provide "num1" and "num2" in the URL' }))
        }

        const sum = Number(num1) + Number(num2)

        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ message: "Calculation successful", input: { num1, num2 }, result: sum }))
    }

    res.writeHead(404)
    res.end('Not found')
})

server.listen(3600, () => console.log('running on http://localhost:3600'))