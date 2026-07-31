const { EventEmitter } = require('node:events')
const emitter = new EventEmitter()

emitter.on('hello', () => {
    console.log('hello world')
})

emitter.emit('hello')



emitter.on('greet', (name) => {
    console.log(`hello ${name}!`)
})

emitter.emit('greet', 'Andria')



emitter.on('login', () => {
  console.log('User logged in');
});

emitter.on('login', () => {
  console.log('Welcome back!');
});

emitter.emit('login');



emitter.on('sum', (num1, num2) => {
    console.log(num1 + num2)
})

emitter.emit('sum', 2, 2)



emitter.on('error', () => {
    console.log('something went wrong')
})

emitter.emit('error')