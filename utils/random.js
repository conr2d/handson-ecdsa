// Simple but insecure example of RNG (Random Number Generator)
const random = {
  m: 0x100000000,
  a: 1664525,
  c: 1013904223,
  state: undefined,
  random: function() {
    throw new Error('You must call random.seed(seed) first');
  },
  seed: function(seed) {
    this.state = seed;
    this.random = function() {
      // Linear Congruential Generator (LCG)
      // https://en.wikipedia.org/wiki/Linear_congruential_generator
      this.state = (this.a * this.state + this.c) % this.m;
      // Ensure the result is unsigned.
      return this.state >>> 0;
    }
  },
};

export { random };
