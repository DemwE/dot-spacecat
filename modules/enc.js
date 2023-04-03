const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const fs = require('fs');

function encryptFile(file, password) {
    // Create read and write streams for the input and output files
    const input = fs.createReadStream(file);
    const output = fs.createWriteStream(file + '.enc');

    // Generate initialization vector (IV) for the encryption
    const iv = crypto.randomBytes(16);

    // Create cipher object with the algorithm and password
    const cipher = crypto.createCipheriv(algorithm, password, iv);

    // Write the IV to the output file
    output.write(iv);

    // Pipe the input stream through the cipher and then to the output stream
    input.pipe(cipher).pipe(output);

    // Log success message to the console
    console.log('File encrypted successfully!');
}

module.exports = {encryptFile};