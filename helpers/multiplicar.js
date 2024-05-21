const manejadordearchivosfs = require("fs");
const { argv } = require("process");
const colors = require('colors');
const crearArchivos = async (base = 5, listar = false, hasta=10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida+= `${base}`.blue+ 'x'.red + `${i}`.blue+ '='.red + `${base * i}\n`.green;
      consola+= `${base}`+ 'x'+ `${i}`+ '=' + `${base * i}\n`;

    }
    if (listar) {
      console.log("========".green);
      console.log('Tabla de: ',colors.blue(base));
      console.log("========".green);
      console.log(salida);
    }

  
      const nombreArchivo = `tabla-${base}.txt`; // Definimos el nombre del archivo
      manejadordearchivosfs.writeFileSync(`./salida/${nombreArchivo}`,consola); // Escribimos en el archivo
      return nombreArchivo; // Devolvemos el nombre del archivo
   
     
    
  } catch (error) {
    console.error(error);
    throw error; // Lanzamos el error para que pueda ser manejado en la llamada
  }
};

module.exports = {
  crearArchivos,
};
