
const {crearArchivoTabla} = require("./helpers/multiplicar")
const argv = require("./config/yargs")

console.clear

// const [, , arg3="base=5"]=process.argv
// const [,base=5] = arg3.split("=")

console.log(argv)
const limite = 5

//const base = 3;
 crearArchivoTabla(argv.b,argv.l,argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo,"creado"))
    .catch(err => console.log(err))

