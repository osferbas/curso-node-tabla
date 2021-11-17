const argv = require("yargs")
    .option("b",{
        alias: "base",
        type:"number",
        demandOption:true,
        describe:"Es la base de la tabla multiplicar"
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw "la base tiene que ser un numero"
        }
        return true
    })
    .option("l",{
        alias: "listar",
        type:"bolean",
        default:false,
        describe:"muestra la tabla en consola"
    })
    .option("h",{
        alias: "limite",
        type:"number",
        default:10,
        describe:"es el limite por el cual se hace la multiplicacion",
        demandOption:true
    })
    .check((argv,options)=>{
        if(isNaN(argv.h)){
            throw "el limite tiene que ser  un numero"
        }
        return true
    })
    .argv;

module.exports=argv;