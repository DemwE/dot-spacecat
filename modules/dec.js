const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const fs = require('fs');

function decryptFile(file, password) {
    const readInitVect = fs.createReadStream(file, { end: 15 });

    let iv;
    readInitVect.on('data', (chunk) => {
        iv = chunk;
    });

    readInitVect.on('close', () => {
        const readStream = fs.createReadStream(file, { start: 16 });
        const decipher = crypto.createDecipheriv(algorithm, password, iv);
        const writeStream = fs.createWriteStream(`${file.slice(0, -4)}`, { flags: 'a' });

        readStream
            .pipe(decipher)
            .pipe(writeStream)
            .on('finish', () => console.log('Decryption complete!'));
    });

}

module.exports = {decryptFile};