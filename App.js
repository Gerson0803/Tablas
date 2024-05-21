const { crearArchivos } = require("./helpers/multiplicar");
const argv=require("./config/yargs");
require("colors")
console.clear();
const base = 3;
console.log(process.argv);
console.log(argv);

console.log("base: yargs", argv.base);

 crearArchivos(argv.base,argv.listar,argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "Creado"))
  .catch((err) => console.log(err));
