// const {readFile} = require('fs')
const {readFile} = require('fs/promises') // ya son promesas
const {promisify} = require('util')

function gettext(pathFile) {
    // es nativo el objeto
    return new Promise(function (resolve, error) {
        readFile(pathFile, 'utf-8', (err, data) => {
            if(err) {
                reject(error)
            }

            resolve(data)
        })
    }) 
}

// recordar que es una promesa
// gettext('./data/text.txt')
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

async function readText() {
    try {
        const result = await gettext('./data/text.txt')
        console.log(result)
    }
    catch(error) {
        console.log(error)
    }
}


// promisify que es mas optimo que usar async await
// const readfilePromise = promisify(readFile)
// readText() 
// async function readText() {
//     try {
//         const result = await readfilePromise('./data/text2.txt', 'utf-8')
//         console.log(result)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

 
async function read() {
    try {
        const result = await readFile('./data/text2.txt', 'utf-8')
        console.log(result)
    }
    catch(error) {
        console.log(error)
    }
}
read()