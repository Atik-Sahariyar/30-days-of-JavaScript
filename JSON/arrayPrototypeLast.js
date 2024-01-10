/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};

// Example usage
const arr = [1, 2, 3];
console.log(arr.last()); // Output: 3