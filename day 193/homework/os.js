import os from 'os'
console.log(`-------------------------`)
console.log(`Operating System`)
console.log(`-------------------------`)

console.log(`name: ${os.type}`)
console.log(`platform: ${os.platform()}`)
console.log(`arch: ${os.arch()}`)

console.log(`totalmem: ${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`)//*RAM რაც მთლიანად გაქვს, სრული მეხსიერება.
console.log(`freemem: ${(os.freemem() / 1024 ** 3).toFixed(2)} GB`) //*RAM რაც გაქვს დარჩენილი, თავისუფალი რამი.

console.log(`uptime: ${Math.floor(os.uptime())} seconds`)

const cpus = os.cpus()
console.log(`CPU cores: ${cpus.length}`)
console.log(`CPU model: ${cpus[0].model}`)

console.log(`homedir: ${os.homedir()}`)
console.log(`hostname: ${os.hostname}`)

console.log(`-------------------------`)
console.log(`Node.js`)
console.log(`-------------------------`)

console.log(`process ID: ${process.pid}`) //* უნიკალური ID ამჟამინდელ node.js პროცესის
console.log(`process Platform: ${process.platform}`) //* პლატფორმა მომხმარებელის linux, win32, darwin ასშ
console.log(`process version: ${process.version}`) //* node.js-ის ვერსია. მაგალითად v24.11.0

const name = process.argv[2]
console.log(`Hello ${name}`) //* ვუშვებთ ტერმინალიდან: node os.js Andria

console.log(`cwd: ${process.cwd()}`)//* გვიჩვენებს იმ ფაილის path-ს საიდანაც node გავუშვით
// console.log(__dirname) //* გვიჩვენებს იმ ფაილის path-ს სადაც ვმუშაობთ

// setTimeout(() => {
//     console.log(`Hello ${name}`)
//     process.exit()
// }, 3000);

const interval = setInterval(() => {
    console.log('Program Running')
}, 1000);
setTimeout(() => {
    clearInterval(interval);
    process.exit();
}, 5100);