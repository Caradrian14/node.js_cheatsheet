# CheatSheet y guia de Node Js

## Ejecutar en terminal
`node --version` para ver la version y comprobar que esta instalado
`node .\index.js` para ejecutar en la terminal un programa. Cuidado que se ha hecho con un entorno windows

Toda la sintaxis de javascript es reutilizable en nodejs

Las funcionalidades se parecen a las del navegador, pero en este caso node nos da mas poder para poder manejar ficheros y archivos a nivel de servidor. la consola no se puede interactuar

## npm init
`npm init` inicializa el proyecto desde 0 y se puede ir rellenando con lo que te sale.
Se le puede añadir el `-y` para que sea sencillo y luego y amodificarlo
## Nodemon
un modulo que ejecuta inmediatamente node al aplicar un cambio para comprobar qu evaya bien ( comodo para vs code)

## instalar modulos globales
se puede instalar modulos globales, en todo el sistema, como lo hace pip en python. 
`npm i nodemon -g` con esto s einatala en todo el sistema operativo para que este en todos lados
`npm remove nodemon -g` para quitarlo del sistema operativo

## npx
Este comando sirve para aplocaciones de consola. te instala un paquete bin para ser usado desde consola.

## Modulos export y imports
en `package.json` si se cambia la parte de `type` a 'modules' se puede realizar el import y export para adaptarlo.
