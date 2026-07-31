const { error } = require('node:console')
const http = require('node:http')

const PORT = 3008

let usersArr = []

const loadUsers = async () => {
    try {
        const res = await fetch('https://dummyjson.com/users');
        if (!res.ok) {
            throw new Error('ragac moxda meravici');
        }
        const data = await res.json();
        usersArr = data.users;
    } catch (error) {
        console.error('es ragac moxda:', error);
    }
};



const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.method === 'GET' && req.url === '/users'){
        let users = usersArr.map(item => `${item.firstName} ${item.lastName}`)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
        return
    }
    
    if(req.method === 'GET' && req.url.startsWith('/users?')){
        const url = new URL(req.url, `http://${req.headers.host}`);
        const id = url.searchParams.get('id')
        const user = usersArr.find(item => item.id === Number(id))

        if(!user){
            res.writeHead(404, { 'Content-Type' : 'application/json' })
            res.end(JSON.stringify('User not found!'))
            return
        }

        res.writeHead(200, { 'Content-Type' : 'application/json' })
        res.end(JSON.stringify(`${user.firstName} ${user.lastName}`))
    }
})

loadUsers().then(() => {
    server.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
});