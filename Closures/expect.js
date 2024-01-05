function expect(val) {
    return {
        toBe: function(compareVal) {
            if (val !== compareVal) {
                throw new Error("Not Equal");
            }
            return  true ;
        },
        notToBe: function(compareVal) {
            if (val === compareVal) {
                throw new Error("Equal");
            }
            return true ;
        }
    };
}

// Example 1:
const func1 = () => {
    try {
        return expect(5).toBe(5);
    } catch (error) {
        return  error.message ;
    }
};
console.log(func1()); // Output: {"value": true}

// Example 2:
const func2 = () => {
    try {
        return expect(5).toBe(null);
    } catch (error) {
        return  error.message ;
    }
};
console.log(func2()); // Output: {"error": "Not Equal"}

// Example 3:
const func3 = () => {
    try {
        return expect(5).notToBe(null);
    } catch (error) {
        return  error.message ;
    }
};
console.log(func3()); // Output: {"value": true}
