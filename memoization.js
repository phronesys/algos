/* const prevValues = []
let square = (n) => {
  if (prevValues[n] != null) return prevValues[n];
  let result = 0;
  for(let i = 0; i < n; i++) {
    for(let i = 0; i < n; i++) {
      result += 1;
    }
  }
  prevValues[n] = result;
  return result;
}

  for(let i = 0; i < 10; i++) {
    console.log(square(30000));
  } */

let fib = (n, prevValues = []) => {
  if (prevValues[n]) return prevValues[n]
  let result;
  n <= 2 ? result = 1 : result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
  prevValues[n] = result;
  return result;
}
for (let i = 0; i < 1000; i++) {
  console.log(fib(i));
}
