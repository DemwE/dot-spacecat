const flags = require('./modules/flags');
const usage = require('./modules/usage');
const cgzip = require('./modules/cgzip');
const ugzip = require('./modules/ugzip');
const dec = require('./modules/dec');
const enc = require('./modules/enc');

const readlineSync = require('readline-sync');
const crypto = require('crypto');
const gzip = require('gzip-js');
const argv = flags.argv;

// get file prompt
const file = process.argv[2];

const inputFile = file;
const outputFile = `${inputFile}.spacecat`;

function spacecat(file, outputFile, argv){

    if (argv.password) {
        const password = readlineSync.question('Podaj hasło: ', {
            hideEchoBack: true,
        });
        console.log(`Podane hasło to: ${password}`);
        var hashpassword = crypto.createHash('sha256').update(password).digest('base64').substr(0, 32);

        //have extension .spacecat
        if (file.endsWith('.spacecat')) {
            dec.decryptFile(inputFile, hashpassword);
            ugzip.ugzip(inputFile);
        }
        else {
            cgzip.compressFile(inputFile, outputFile);
            enc.encryptFile(outputFile, hashpassword);
        }
    }
    else {
        //have extension .spacecat
        if (file.endsWith('.spacecat')) {
            ugzip.ugzip(file);
        }
        else {
            cgzip.compressFile(inputFile, outputFile);
        }
    }
}

// if user does not provide file path in command line, then show usage
if (!file) {
    console.log(usage.usage());
    process.exit();
}
else{
    spacecat(file, outputFile, argv);
}
