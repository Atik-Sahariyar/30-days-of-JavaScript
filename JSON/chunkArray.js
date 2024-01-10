
const chunk = (arr, size) => {
    const chunkedArray = [];

    for(let i = 0; i < arr.length; i += size){
        chunkedArray.push(arr.slice(i, i + size));
    }
    return  chunkedArray
};


// Example 1
const arr1 = [1, 2, 3, 4, 5];
console.log(chunkArray(arr1, 1)); // Output: [[1],[2],[3],[4],[5]]

// Example 2
const arr2 = [1, 9, 6, 3, 2];
console.log(chunkArray(arr2, 3)); // Output: [[1,9,6],[3,2]]

// Example 3
const arr3 = [8, 5, 3, 2, 6];
console.log(chunkArray(arr3, 6)); // Output: [[8,5,3,2,6]]

// Example 4
const arr4 = [];
console.log(chunkArray(arr4, 1)); // Output: []