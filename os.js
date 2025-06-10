const os = require('os') // llamamos al usuario

console.log(os.userInfo())
console.log(os.uptime())
console.log(os.platform())
console.log(os.totalmem()) // total memoria
console.log(os.freemem()) // memoria libre

// mustra tablas
console.table({
    os: os.platform(),
    version: os.totalmem()
})