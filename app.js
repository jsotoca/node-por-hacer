const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listado':
        let listado = porHacer.getListado();
        listado.forEach(tarea => {
            console.log(`====== POR HACER =======`.green);
            console.log(`Tarea: ${tarea.descripcion} - Estado: ${tarea.completado}`);
            console.log(`========================`.green);
        });
        break;
    case 'actualizar':
        let resultado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(resultado);
        break;
    case 'borrar':
        let borrado = porHacer.eliminar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("comando no valido");
        break;
}
