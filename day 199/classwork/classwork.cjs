const http = require("http");
const PORT = 3014
let data = []
const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        let body = ''
        req.on('data', chunk => {body += chunk})
        req.on('end', () => {
            try{
                const json = JSON.parse(body)
                data.push(json)
                console.log(data)
                res.end('received')
            }catch(err){
                console.log(err)
                res.statusCode = 400
            }
        })
    }

    if(req.method === 'PUT'){
        let body = ''
        req.on('data', chunk => {body += chunk})
        req.on('end', () => {
            const json = JSON.parse(body)
            data[json.id] = json.product
        })
    }

    if(req.method === 'GET'){
        let body = ''
        req.on('data', chunk => {body += chunk})
        req.on('end', () => {
            if(body.length > 0){
                const json = JSON.parse(body)
                const result = data[json.id]
                res.end(JSON.stringify(result))
            }else{
                res.end(JSON.stringify(data))
            }
        })
    }

    if(req.method === 'DELETE'){
        let body = ''
        req.on('data', chunk => {body += chunk})
        req.on('end', () => {
            if(body.length > 0){
                const json = JSON.parse(body)
                data = data.filter(item => item.id !== json.id)
                res.end('deleted')
            }else{
                data = []
                res.end('deleted')
            }
        })
    }
})
server.listen(PORT, console.log('server running on http://localhost:3014'))