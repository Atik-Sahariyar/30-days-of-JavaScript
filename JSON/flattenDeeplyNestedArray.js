
const flat =  (arr, n) => {
    if (n === 0) return arr;
    const flattenHelper = (arr, depth) => {
        return arr.reduce((acc, val) => {
            if (Array.isArray(val) && depth < n) {
                return acc.concat(flattenHelper(val, depth + 1))
            } else if (Array.isArray(val) && depth === n) {
                return acc.concat([val]);
            } else {
                return acc.concat(val);
            }
            }, []);
    }

    return flattenHelper(arr, 0)
};