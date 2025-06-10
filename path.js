const path = require('path')

console.log(path.sep)

// mezcla los directorios que le digamos en base al os que estemos
const filepath = path.join('public', 'dist', 'styles')
console.log(filepath)
console.log(path.basename(filepath))
console.log(path.dirname(filepath))
console.log(path.parse(filepath))
console.log(path.resolve('dist'))