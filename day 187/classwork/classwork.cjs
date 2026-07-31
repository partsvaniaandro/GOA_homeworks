const { EventEmitter } = require('node:events');
const emmiter = new EventEmitter()


//1
emmiter.on('message0', (text) => {
    console.log(`NEW MESSAGE: ${text}`)
})

emmiter.emit('message0', 'hello world0')


//2
emmiter.on('programStart0', () => {
    console.log('program0 started')
})
emmiter.on('message', (text) => {
    console.log(text)
})

emmiter.emit('programStart0')
emmiter.emit('message1', 'hello world1')

//3
emmiter.on('programStart1', () => {
    console.log('program1 started')
})
emmiter.on('checkEven', (num) => {
    num % 2 === 0 ? console.log('number is even') : console.log('number is odd')
})
emmiter.on('programEnd1', () => {
    console.log('program1 ended')
})

emmiter.emit('programStart1')
emmiter.emit('checkEven', 2)
emmiter.emit('programEnd1')
