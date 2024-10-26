// # Practice
//
// Fill empty function and generate an Ethereum address.

import { keccak_256 } from '@noble/hashes/sha3';
import { ethers } from 'ethers';
import esMain from 'es-main';

import { getPublicKey } from './2_key.js';
import { generateMnemonic, deriveEthereumKey } from './3_mnemonic.js';

export function getAddress(publicKey) {

}

if (esMain(import.meta)) {
  const mnemonic = generateMnemonic();
  const privateKey = deriveEthereumKey(mnemonic);
  const publicKey = getPublicKey(privateKey, false);
  const address = getAddress(publicKey);
  const checksumAddress = ethers.getAddress(address);

  console.log('mnemonic:', mnemonic);
  console.log('secret:', privateKey.toString('hex'));
  console.log('public:', publicKey.toString('hex'));
  console.log('address:', address);
  console.log('checksum:', checksumAddress);
}
