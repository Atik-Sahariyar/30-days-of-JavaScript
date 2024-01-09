// Constructor function for the TimeLimitedCache class
var TimeLimitedCache = function () {
    // Initialize a Map to store key-value pairs and associated timeouts
    this.cache = new Map();
};

// Method to set a key-value pair with a specified expiration duration
TimeLimitedCache.prototype.set = function (key, value, duration) {
    // Retrieve the existing value associated with the key in the cache
    const valueInCache = this.cache.get(key);
    
    // If there's an existing value, clear its timeout to update the duration
    if (valueInCache) {
        clearTimeout(valueInCache.timeout);
    }
    
    // Set a new timeout for the key to be deleted after the specified duration
    const timeout = setTimeout(() => this.cache.delete(key), duration);
    
    // Store the key-value pair along with the timeout in the cache
    this.cache.set(key, { value, timeout });
    
    // Return a boolean indicating if an un-expired key already existed
    return Boolean(valueInCache);
};

// Method to get the value associated with a key from the cache
TimeLimitedCache.prototype.get = function (key) {
    // Check if the key exists in the cache, return its associated value or -1 if expired
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

// Method to count the number of non-expired keys in the cache
TimeLimitedCache.prototype.count = function () {
    // Return the size of the cache, representing the count of non-expired keys
    return this.cache.size;
};

// Instantiate a TimeLimitedCache object
const obj = new TimeLimitedCache();

// Example usage demonstrating setting a value, getting a value, and counting non-expired keys
console.log(obj.set(1, 42, 1000)); // Output: false
console.log(obj.get(1)); // Output: 42
console.log(obj.count()); // Output: 1
