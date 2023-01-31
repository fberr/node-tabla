const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'es el numero base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'es el numero limite de la tabla'
                })
                .check( (argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;