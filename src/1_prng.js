// # Practice
//
// Generate a 32-bit unsigned integer with `randomBytes`.

import { uint8ArrayToUint32 } from '../utils/index.js';
import esMain from 'es-main';

// Insecure RNG
//import { random, randomBytes } from '../utils/index.js';
//random.seed(1234);

// Secure RNG
import { randomBytes } from 'crypto';

export { randomBytes };

if (esMain(import.meta)) {
  // Replace `undefined` with your solution.
  const bytes = undefined;
  const number = undefined;

  console.log(`random: ${number}`);
}
