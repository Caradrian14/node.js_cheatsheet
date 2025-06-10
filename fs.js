const fs = require('fs')

const first = fs.readFileSync('./data/text.txt', 'utf-8') // poner los utf o saldran los numeros ascii
const second = fs.readFileSync('./data/text2.txt', 'utf-8')
console.log(first)

// escribir en el fichero
// fs.writeFileSync('./data/text2.txt', 'holaholaholaa')
// puede crear ficheros nuevos
// fs.writeFileSync('./data/text3.txt', 'aaaaaaaaaa')

fs.readFile('./data/text.txt', function(error, data) {
    if (error) {
        console.error('Error al leer el archivo:', error);
        return; // Salir de la función si hay un error
    } else {
        console.log('Terminé de leer el archivo');
        console.log(data.toString());
    } 
});