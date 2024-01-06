
var reduce = function(nums, fn, init) {
    if(nums.lenght === 0){
        return init
    }
    let val = init;
    for(let i = 0; i<nums.length; i++){
       val = fn(val, nums[i]);
    }
    return val
};


const nums = [1, 2, 3, 4];
let init = 0;
const fn = ( accum, curr ) => accum + curr;

const fn2 = ( accum, curr ) => accum + curr*curr;
const init2 = 100;

const nums3 = [];
const fn3 = ( accum, curr ) => 0;
const init3 = 25;

console.log(reduce(nums, fn, init))
console.log(reduce(nums, fn2, init2))
console.log(reduce(nums3, fn3, init3))

