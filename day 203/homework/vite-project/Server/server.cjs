const http = require('node:http')
const PORT = '3000'
let data = []
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(response => data = response)

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if(req.method === 'GET' && req.url.startsWith('/products')){
        console.log('GET')
        let query = req.url.split('?')[1]
        let searchTerm = new URLSearchParams(query).get('search')
        searchTerm = searchTerm !== null ? searchTerm.toLowerCase() : null
        let category = new URLSearchParams(query).get('category')
        console.log(category)
        let filteredData = data.filter(item => {
            return((searchTerm !== null ? item.title.toLowerCase().includes(searchTerm) : true) && (category !== null && category !== 'null' ? item.category === category : true))
        })
        res.writeHead(200, {'Content-Type': 'application.json'})
        res.end(JSON.stringify(filteredData))
    }
})

server.listen(PORT, () => console.log(`server live on http://localhost:${PORT}`))