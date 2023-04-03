// libs
const yargs = require('yargs');

//flags
const argv = yargs
    .option('p', {
        alias: 'password',
        demandOption: false,
        describe: 'Password to encrypt file',
        type: 'boolean',
    })
    .argv;


module.exports = {argv};
