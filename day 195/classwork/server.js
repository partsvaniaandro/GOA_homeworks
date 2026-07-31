import http from 'http'
const PORT = 3010
const server = http.createServer((req, res) => {
    console.log('request received')

    res.end('request ended')
})

server.listen(PORT, () => console.log('server live on http://localhost:3010'))