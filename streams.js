const {writeFile} =  require ('fs/promises')
//crea un fichero como ya sabemos
const createBigFile = async() => {
    await writeFile('./data/bigfile.ext', 'hello world')
}

// los streams son para dividir un archivo pesado en partes pequeña spara que se vaya descargando sin necesidad de estar pesando

//createBigFile()

const {createReadStream} = require('fs')
const stream = createReadStream('./data/bigfile.ext')
// lo lea por partes
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('Ya se ha leido el fichero')
})

stream.on('error', (error) => {
    console.log(error)
})