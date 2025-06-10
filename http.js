const http = require('http')
// podemos acceder a la pagina web en localhost:3000 y ahi lo tendremos todo
http.createServer(function(request, response) {
    
    console.log(request.url)
    
    if(request.url === "/welcome") {
        response.write('Welcome')
        return response.end()
    }

    if(request.url === "/about") {
        response.write('acerca de')
        return response.end()
    }

    response.write('Not found') // se puede añadir htl aqui
    response.end()
}).listen(3000)

console.log('Servidor Escichando en el puerto 3000')
