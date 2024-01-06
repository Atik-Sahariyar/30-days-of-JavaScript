const once = (fn) => {
    let called = false;
    let result;
    
    return(...args) => {
        if(!called){
            called = true;
            result = fn(...args);
            return result;
        } else {
            return undefined;
        }
    };
};


// Test case 1

const fn1 = (a, b, c) => a + b + c;
const calls1 = [[1, 2, 3], [2, 3, 6]];
const onceFn1 = once(fn1);

const output1 = calls1.map((call) => ({
    calls: 1,
    value: onceFn1(...call)
}));

console.log(output1); // Output: [{"calls":1,"value":6}]


// Test case 2
const fn2 = ( a, b, c ) => a * b * c;
const calls2 = [[5, 7, 4], [2, 3, 6], [4, 6, 8]];
const onceFn2 = once(fn2);

const output2 = calls2.map((call) => ({
    calls: 1,
    value: onceFn2(...call),
}));

console.log(output2);
