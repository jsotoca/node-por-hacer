const descripcion = {
    demand:true,
    alias:'d',
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    default:true,
    alias:'c',
    desc:'marca como completado o pendiente la tarea'
}

const argv = require("yargs")
                .command('crear','crear un elemento por hacer',{
                    descripcion
                })
                .command('actualizar','Actualizar el estado de la tarea',{
                    descripcion,
                    completado
                })
                .command('borrar','elimina una tarea del listado',{
                    descripcion
                })
                .help()
                .argv;

module.exports = {
    argv 
}
