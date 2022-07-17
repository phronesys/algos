// More about Generators
// https://observablehq.com/@observablehq/introduction-to-generators

// Notes on a JSConf talk by Anjana Vakil
// https://www.youtube.com/watch?v=gu3FfmgkwUc

/* custom iterables */
const cardDeck = {
  suits: ["♣️", "♦️", "♥️", "♠️"],
  court: ["J", "Q", "K", "A"],
  [Symbol.iterator]: function* () {
    for (let suit of this.suits) {
      for (let i = 2; i <= 10; i++) yield suit + i;
      for (let c of this.court) yield suit + c;
    }
  },
};

// console.log(cardDeck.suits);
// console.log([...cardDeck]);

/* lazy evaluation and infinite sequences */

/**
 * controlled iteration to infinity
 */
function* infinityAndBeyond() {
  let i = 1;
  while (true) {
    yield i++;
  }
}
const infinity = infinityAndBeyond();
// console.log(infinity.next());
// console.log(infinity.next());
// console.log(infinity.next());
// console.log(infinity.next());

/**
 * take things from a iterable
 * @param {Number} n
 * @param {Iterable} iterable
 */
function* take(n, iterable) {
  for (let item of iterable) {
    if (n <= 0) return; // stops
    n--;
    yield item; // pauses
  }
}

// const taken = [...take(11001, infinity)];
// console.log(taken);

/**
 * applies a function to the iterable lazily
 * @param {Iterable} iterable
 * @param {Function} mapFn
 */
function* map(iterable, mapFn) {
  for (let item of iterable) {
    yield mapFn(item);
  }
}

const squares = [
  ...take(
    10000000,
    map(infinity, (x) => x * x)
  ),
];

console.log(squares);

function* now() {
  while(true){
    yield Date.now();
  }
}



