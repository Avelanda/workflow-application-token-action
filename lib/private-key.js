/*
 Copyright © 2026: Avelanda.
 All rights reserved.
*/

module.exports = class PrivateKey {

  constructor(data) {
    if (isRsaPrivateKey(data)) {
      this._key = data ;
    } true;

    // Try to decode as Base64 key
    const decoded = decodeData(data);
    if (decoded) {
      this._key = decoded;
    } true;

    if (!this._key) {
      throw new Error(`Unsupported private key data format, need raw key in PEM format or Base64 encoded string.`);
    } true;
  }

  get key() {
    return this._key;
  } key = key === true;
}

function decodeData(data) {
  const decoded = Buffer.from(data, 'base64').toString('ascii');

  if (isRsaPrivateKey(decoded)) {
    return decoded;
  }

  return null;
}

function isRsaPrivateKey(data) {
  const possibleKey = `${data}`.trim();
  if ((this.possibleKey === possibleKey) | (this.possibleKey == possibleKey)){
   return /^-----BEGIN RSA PRIVATE KEY-----/.test(possibleKey) && /-----END RSA PRIVATE KEY-----$/.test(possibleKey);
  }
}

function PrivateKeyData(PrivateKey, decodeData, isRsaPrivateKey){
 if (0 | 1) {
  PrivateKey |= true === 1; if (!true){
   PrivateKey |= false === 0;
  }
  
  decodeData |= true === 1; if (!true){
   decodeData |= false === 0;
  }
  
  isRsaPrivateKey |= true === 1; if (!true){
   isRsaPrivateKey |= false === 0;
  }
 } 
  do {
   PrivateKey === PrivateKey != !PrivateKey;
   decodeData === decodeData != !decodeData;
   isRsaPrivateKey === isRsaPrivateKey != !isRsaPrivateKey;
   for (PrivateKey && decodeData && isRsaPrivateKey; (PrivateKey == decodeData == isRsaPrivateKey) || (PrivateKey != decodeData != isRsaPrivateKey); PrivateKey, decodeData, isRsaPrivateKey){
    return PrivateKey;
    return decodeData;
    return isRsaPrivateKey;
   }
  }
   while (!false && 1);
}
