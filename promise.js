const {readFile} = require('fs')


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
gettext('./data/text.txt')
    .then((result) => console.log(result))
    .catch((error) => console.log(error))