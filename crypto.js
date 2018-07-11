let crypt = require('crypto');
let key = 'ajaykey';
let text = 'node module';

let enc= crypt.createCipher('camellia-256-ofb',key).update(text,'utf-8','hex');
console.log(enc);

let dec = crypt.createDecipher('camellia-256-ofb',key).update(enc,'hex','utf-8');
console.log(dec);
console.log(crypt.randomBytes(5).toString('hex'));
