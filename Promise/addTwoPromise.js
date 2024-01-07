
const addTwoPromises = async(promise1, promise2) => {
    const p1 = await promise1
    const p2 = await promise2
    return p1 + p2;
   
};


// test cases
const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)) 
const promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))

const result = addTwoPromises(promise1, promise2);

console.log(result);