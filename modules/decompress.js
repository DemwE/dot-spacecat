const zlib = require('zlib');
const fs = require('fs');

function decompressFile(inputFilePath, outputFilePath, options = {}) {
    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    input.pipe(zlib.createGunzip(options)).pipe(output);
}

module.exports = { decompressFile };
