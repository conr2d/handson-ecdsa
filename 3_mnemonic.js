import esMain from 'es-main';

import { HDKey } from '@scure/bip32';
import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';

export function generateMnemonic() {
  return bip39.generateMnemonic(wordlist);
}

export function deriveEthereumKey(mnemonic, index = 0) {
  const hdkey = HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));
  return Buffer.from(hdkey.derive(`m/44'/60'/0'/0/${index}`).privateKey);
}

if (esMain(import.meta)) {
  const mnemonic = generateMnemonic();
  const ethereumKey = deriveEthereumKey(mnemonic);
  console.log('mnemonic:', mnemonic);
  console.log('ethereum:', ethereumKey.toString('hex'));
}
