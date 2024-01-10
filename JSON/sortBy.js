
var sortBy = function(arr, fn) {
    return arr.slice().sort((a, b) => {
       const valA = fn(a);
       const valB = fn(b);
       return valA - valB;
    });
};