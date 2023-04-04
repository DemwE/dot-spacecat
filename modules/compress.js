const zlib = require('zlib');
const fs = require('fs');

function compressFile(inputFilePath, outputFilePath, options = {}) {
    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    input.pipe(zlib.createGzip(options)).pipe(output);
}

module.exports = { compressFile };
