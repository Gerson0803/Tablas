const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  }).option("l", {
    alias: "listar",
    type: "boolean",
    default:false,
    describe:"Muestra la tabla en consola"
  }).option("h", {
    alias: "hasta",
    type: "number",
    default:10,
    describe:"Hasta donde va "
  })
  .check((argv,options)=>{
    if(isNaN(argv.base)){
      throw("debe ser un numero ")
    }
    return true;
  }).argv;

module.exports=argv;//Este si se exporta asi no como los demas elementos que toca ponerlos como objetos