// # Practice
//
// Fill empty functions and generate mnemonic and an Ethereum private key.

import { HDKey } from '@scure/bip32';
import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import esMain from 'es-main';

export function generateMnemonic() {

}

export function deriveEthereumKey(mnemonic, index = 0) {

}

if (esMain(import.meta)) {
  const mnemonic = generateMnemonic();
  const ethereumKey = deriveEthereumKey(mnemonic);

  console.log('mnemonic:', mnemonic);
  console.log('ethereum:', ethereumKey.toString('hex'));
}
