const buf0 = Buffer.from('Hello World')
console.log(buf0)

const str0 = buf0.toString()
console.log(str0)

const buf1 = Buffer.alloc(10)
buf1.write("Andria")
console.log(buf1)

const bufConcat = Buffer.concat([buf0, buf1])
console.log(bufConcat)

const result = buf0.equals(buf1)
console.log(result)


console.log(process.pid)

console.log(process.cwd())