import { random } from './random.js';

export function uint32ToUint8Array(n) {
  return new Uint8Array(new Uint32Array([n]).buffer);
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
