import esMain from 'es-main';

// #1 Insecure RNG
//import { random, randomBytes } from './utils/index.js';
//random.seed(1234);

// #2 Secure RNG
import { randomBytes } from 'crypto';

export { randomBytes };

if (esMain(import.meta)) {
  const bytes = randomBytes(4);
  const num = new DataView(bytes.buffer).getUint32(0);

  console.log('random:', num);
}
