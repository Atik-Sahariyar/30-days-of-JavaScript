const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
};


const sum = ( a, b ) => a + b;
const factorial = (n) => ( n <= 1 ? 1 : n * factorial(n-1));
const fib = (n) => ( n <= 1 ? n: fib(n - 1) + fib(n - 2));

// Memoizing the functions
const memoizedSum = memoize(sum);
const mwemoizedFactorial = memoize(factorial);
const memoizedFib = memoize(fib);

// test case 1
const actions1  = ["call", "call", "getCallCount", "call", "getCallCount"];
const values1 =  [[2, 2], [2, 2], [], [1, 2], []];
const output1 = [];

for( let i = 0; i < actions1.length; i++){
    const action = actions1[i];
    const args = values1[i];
 
    switch (action) {
        case "call":
           output1.push(memoizedSum(...args));
           break;
        case "getCallCount": 
           output1.push(Object.keys(memoizedSum.cache || {}).length);
           break;
        default: 
          break;
    }
};

console.log(output1)


// Test case 2
const actions2 = ["call", "call", "call", "getCallCount", "call", "getCallCount"];
const values2 = [[2], [3], [2], [], [3], []];
const output2 = [];

for (let i = 0; i < actions2.length; i++) {
  const action = actions2[i];
  const args = values2[i];
  switch (action) {
    case "call":
      output2.push(memoizedFactorial(...args));
      break;
    case "getCallCount":
      output2.push(Object.keys(memoizedFactorial.cache || {}).length);
      break;
    default:
      break;
  }
}

console.log(output2); // Output: [2, 6, 2, 2, 6, 2]

// Test case 3
const actions3 = ["call", "getCallCount"];
const values3 = [[5], []];
const output3 = [];

for (let i = 0; i < actions3.length; i++) {
  const action = actions3[i];
  const args = values3[i];
  switch (action) {
    case "call":
      output3.push(memoizedFib(...args));
      break;
    case "getCallCount":
      output3.push(Object.keys(memoizedFib.cache || {}).length);
      break;
    default:
      break;
  }
}

console.log(output3); // Output: [8, 1]