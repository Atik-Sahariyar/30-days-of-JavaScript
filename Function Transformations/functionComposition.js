const compose = functions => {
    return x => {
      let result = x;
      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    };
  };
  
  // Test cases
  const functions1 = [x => x + 1, x => x * x, x => 2 * x];
  const x1 = 4;
  
  const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
  const x2 = 1;
  
  const functions3 = [];
  const x3 = 42;
  
  const composedFn1 = compose(functions1);
  console.log(composedFn1(x1)); // Output: 65
  
  const composedFn2 = compose(functions2);
  console.log(composedFn2(x2)); // Output: 1000
  
  const composedFn3 = compose(functions3);
  console.log(composedFn3(x3)); // Output: 42
  