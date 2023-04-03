const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const fs = require('fs');

function decryptFile(inputFile, hashpassword) {
    const readInitVect = fs.createReadStream(inputFile, { end: 15 });

    let iv;
    readInitVect.on('data', (chunk) => {
        iv = chunk;
    });

    readInitVect.on('close', () => {
        const readStream = fs.createReadStream(inputFile, { start: 16 });
        const decipher = crypto.createDecipheriv(algorithm, hashpassword, iv);
        const writeStream = fs.createWriteStream(`${inputFile.slice(0, -9)}`, { flags: 'a' });

        readStream
            .pipe(decipher)
            .pipe(writeStream)
            .on('finish', () => console.log('Decryption complete!'));
    });

}

module.exports = {decryptFile};