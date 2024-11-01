import { random } from './random.js';

export function uint32ToUint8Array(n) {
  return new Uint8Array(new Uint32Array([n]).buffer);
}

export function uint8ArrayToUint32(bytes) {
  return new DataView(bytes.buffer).getUint32(0);
}

export function randomBytes(size) {
  const quotient = Math.floor(size / 4);
  const remainder = size % 4;

  let result = new Uint8Array(size);
  for (let i = 0; i < quotient; i++) {
    const randomNumber = random.random();
    const randomBytes = uint32ToUint8Array(randomNumber);
    result.set(randomBytes, i * 4);
  }
  const randomNumber = random.random();
  const randomBytes = uint32ToUint8Array(randomNumber);
  result.set(randomBytes.slice(0, remainder), quotient * 4);
  return result;
}

export {
  random,
}

export async function getTransactionCount(address) {
  const res = await fetch('https://rpc.sepolia.org', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_getTransactionCount',
      id: 0,
      params: [address, 'latest'],
    }),
  });
  return (await res.json()).result;
}
