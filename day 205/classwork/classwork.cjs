const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const PORT = 3008

const DB_FILE = path.json(__dirname, 'db.json')

const initDB = () => {
    if(!fs.existsSync(DB_FILE)){
        fs.writeFileSync(DB_FILE, JSON.stringify([]))
    }
}

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')

    if(req.method === 'GET' && req.url === '/todos') {
        fs.readFile(DB_FILE, 'utf8', (err, data) => {
            if(err){
                res.statusCode = 500
                return res.end(JSON.stringify({ error: 'Failed to read database' }))
            }
            res.statusCode = 200
            res.end(data)
        })
    }

    if(req.method === 'POST' && req.url === '/todos') {
        let body = ''
        req.on('data', chunk => body += chunk)

        req.on('end', () => {
            try{
                const newTodo = JSON.parse(body)

                if(!newTodo.task){
                    res.statusCode = 400
                    return res.end(JSON.stringify({ error: 'Missing Task' }))
                }
                //add task

                fs.readFile(DB_FILE, 'utf8', (err, data) => {
                    if (err) {
                        res.statusCode = 500;
                        return res.end(JSON.stringify({ error: 'Failed to read database' }));
                    }

                    const todos = JSON.parse(data);
                    const item = { id: Date.now(), task: newTodo.task, completed: false };
                    todos.push(item);

                    fs.writeFile(DB_FILE, JSON.stringify(todos, null, 2), (error) => {
                        if (err) {
                            res.statusCode = 500;
                            return res.end(JSON.stringify({ error: 'Failed to write database' }));
                        }
                        res.statusCode = 200;
                        res.end(JSON.stringify({ message: 'Todo added!', data: item }));
                    })
                })
            }catch(error){
                res.statusCode = 400
                res.end(JSON.stringify({ error: 'Invalid JSON Payload' }))
            }
        })
    }
})