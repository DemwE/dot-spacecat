const gzip = require('gzip-js');
const fs = require('fs');

function ugzip(file) {
    const inputData = fs.readFileSync(file);
    const decompressedData = gzip.unzip(inputData);
    const bufferData = Buffer.from(decompressedData);
    const outputFileName = file.replace(/\.spacecat$/, '');
    fs.writeFileSync(outputFileName, bufferData);
    console.log(`File "${file}" was successfully decompressed to "${outputFileName}".`);
}

module.exports = {ugzip,};
