// console.log('primero')

// setTimeout(() => {
//     console.log('segundo')
// }, 0) // si esta en 0 se salta y pasa despues del tercero

// console.log('tercero')


const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('welcome to the server')
        return res.end()
    }

    if (req.url === '/about') {
        // esto se evita 
        // esta tarea es pesada y node lo bloquea. Esto es un codigo bloqueante
        for ( let i = 0; i < 100000; i++ ) {
            console.log(Math.random() * i)
        }
        return res.end("About page")
    }

    res.end('not found')
})

server.listen(3000)
console.log ("server port 3000")
