// libs
const yargs = require('yargs');
const readlineSync = require('readline-sync');

//flags
const argv = yargs
    .option('p', {
        alias: 'password',
        demandOption: false,
        describe: 'Password to encrypt file',
        type: 'boolean',
    })
    .option('e', {
        alias: 'encrypt',
        demandOption: false,
        describe: 'Encrypt file',
        type: 'boolean',
    })
    .option('d', {
        alias: 'decrypt',
        demandOption: false,
        describe: 'Decrypt file',
        type: 'boolean',
    })
    .argv;


module.exports = {argv};
