// # Practice
//
// Fill empty functions to sign and recover a message.

import { secp256k1 } from '@noble/curves/secp256k1';
import { sha256 } from '@noble/hashes/sha256';
import stringify from 'safe-stable-stringify';
import esMain from 'es-main';

import { generatePrivateKey, getPublicKey } from './2_key.js';

export function sign(privateKey, messageHash) {

}

export function recover(signature, messageHash) {

}

if (esMain(import.meta)) {
  const privateKey = generatePrivateKey();
  const publicKey = getPublicKey(privateKey, false);
  const message = stringify({
    from: publicKey.toString('hex'),
    data: 'Hello, World!',
  });
  const messageHash = Buffer.from(sha256(message));
  const signature = sign(privateKey, messageHash);
  const recoveredPublicKey = recover(signature, messageHash);

  console.log('message:', message);
  console.log('signature:', signature.toCompactHex());
  console.log('recoveryId:', signature.recovery);
  console.log('recovered:', recoveredPublicKey.toHex(false));
}
