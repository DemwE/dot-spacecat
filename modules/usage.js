//usage
function usage() {
    console.log('Usage: node app.js <file>');
    console.log('Options:');
    console.log('  -p, --password  Password to encrypt file');
    console.log('  -e, --encrypt   Encrypt file');
    console.log('  -d, --decrypt   Decrypt file');
    return '';
}

module.exports = {usage};



