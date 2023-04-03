const gzip = require('gzip-js');
const fs = require('fs');

function compressFile(inputFile, outputFile) {
    // read file
    const inputData = fs.readFileSync(inputFile);

    // compress file
    const compressedData = gzip.zip(inputData);

    // convert array to Buffer
    const buffer = Buffer.from(compressedData);

    // write compressed data to file
    fs.writeFileSync(outputFile, buffer);

    console.log('File was saved as:', outputFile);
}

module.exports = { compressFile };
