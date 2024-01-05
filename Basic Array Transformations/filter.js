
const filter = (arr, fn) => {
    const filteredArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)){
           filteredArray.push(arr[i]);
        }
       
    }
    
    return filteredArray;
}

const arr = [0, 10, 20, 30];
const greaterThan10 = (n) => n > 10;
console.log(filter(arr, greaterThan10))

const arr2 = [1,2,3];
const firstIndex = (n, i) => i===0;
console.log(filter(arr2, firstIndex))

const arr3 = [-2,-1,0,1,2];
const plusOne = (n) => n + 1;
console.log(filter(arr3, plusOne))



