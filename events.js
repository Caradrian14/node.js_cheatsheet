const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//escuchamos eventos. Es importante el orden en lo que se crean los eventos, primero crear el evento y luego llamarlo
customEmitter.on('response', (data, secondData) => {
    console.log('recibido')
    console.log(data)
        console.log(secondData)
})
// asi lo llamamos
customEmitter.emit('response', "Hola mundo", [1, 2 , 3])
