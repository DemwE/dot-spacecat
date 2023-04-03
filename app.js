const flags = require('./modules/flags');
const usage = require('./modules/usage');
const dec = require('./modules/dec');
const enc = require('./modules/enc');

const readlineSync = require('readline-sync');
const crypto = require('crypto');

// get file prompt
const file = process.argv[2];


const argv = flags.argv;

function processArgs(argv) {
    if (argv.password) {
        const password = readlineSync.question('Podaj hasło: ', {
            hideEchoBack: true,
        });
        console.log(`Podane hasło to: ${password}`);

        try {
            var hashpassword = crypto.createHash('sha256').update(password).digest('base64').substr(0, 32);
            if (argv.encrypt) {
                console.log('Szyfrowanie pliku...');
                enc.encryptFile(file, hashpassword);
            }
            if (argv.decrypt) {
                console.log('Odszyfrowywanie pliku...');
                dec.decryptFile(file, hashpassword);
            }
        } catch (error) {
            console.log(usage.usage());
        }
    }
}


// if user does not provide file path in command line, then show usage
if (!file) {
    console.log(usage.usage());
    process.exit();
}
else{
    processArgs(argv);
}

