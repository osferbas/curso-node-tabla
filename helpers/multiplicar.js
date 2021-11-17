const fs = require("fs");
const colors = require('colors');
const crearArchivoTabla = async(base=5,listar,limite)=>{
   try {
     

        let salida,consola=""

        for (let index = 0; index <= limite; index++) {
            const resultado = index * base;
            salida +=`la multplicacion de ${base} x ${index} = ${resultado}\n`
            consola +=`la multplicacion de ${colors.green(base)} x ${colors.blue(index)} = ${colors.magenta(resultado)}\n`
        }
        if(listar){
             console.log("==================================".yellow)
             console.log(`tabla de multiplicar de ${base}`.red   )
             console.log( "==================================".yellow)
            console.log(consola)
        }
       

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt creada`;
   } catch (error) {
       throw error
   }


    
}
module.exports= {
    crearArchivoTabla
}
