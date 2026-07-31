import fs from 'fs/promises'

async function run() {
    try {
        await fs.writeFile('text.txt', 'Hello FS Module')
        console.log('file created')

        await fs.readFile('text.txt', 'utf8')
        console.log(data)

        await fs.appendFile('text.txt', 'added text\n')
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

run()