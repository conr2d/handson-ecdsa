// Use `secp256k1` curve.
import { secp256k1 } from '@noble/curves/secp256k1';
import { Buffer } from 'buffer';
import esMain from 'es-main';

import { randomBytes } from './1_prng.js';

// Generate a private key, equivalent to `secp256k1.utils.randomPrivateKey()`
export function generatePrivateKey() {
  let privateKey;
  do {
    privateKey = randomBytes(32);
  } while (!secp256k1.utils.isValidPrivateKey(privateKey));
  return Buffer.from(privateKey);
}

export function getPublicKey(privateKey, compressed = true) {
  return Buffer.from(secp256k1.getPublicKey(privateKey, compressed));
}

if (esMain(import.meta)) {
  const privateKey = generatePrivateKey();
  const publicKey = getPublicKey(privateKey, false);

  console.log('secret:', privateKey.toString('hex'));
  console.log('public:', publicKey.toString('hex'));
}
