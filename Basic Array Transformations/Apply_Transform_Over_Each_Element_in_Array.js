const map = (arr, fn) => {
    const transformedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        transformedArray.push(fn(arr[i], i));
    }
    
    return transformedArray;
}

// Test cases
const arr1 = [1, 2, 3];
const plusOne = (n) =>  n + 1;
console.log(map(arr1, plusOne)); // Output: [2, 3, 4]

const arr2 = [1, 2, 3];
const plusI = (n, i) =>  n + i; ;
console.log(map(arr2, plusI)); // Output: [1, 3, 5]

const arr3 = [10, 20, 30];
const constant = () =>  42;
console.log(map(arr3, constant)); // Output: [42, 42, 42]
