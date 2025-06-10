const myWebAdress = "myweb.com"
const myNumber = 30
const names = ['joe', 'fatima', 'lucy']
const group = "mygroup.com"

// module.exports = myWebAdress // decidimos que exportamos y que no
module.exports = {
    myWebAdress,
    myNumber,
    names,
    group
}
// otra forma de exportar
module.exports.names = names
module.exports.number = myNumber


// console.log(module) // se pueden ver parametros, entre ellos destacar exports que lo puedes parametrizar con la sintaxis de arriba