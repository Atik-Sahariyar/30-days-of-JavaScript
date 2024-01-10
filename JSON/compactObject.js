const compactObject = (obj) => {
    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            const compactedArray = [];
            for (let index = 0; index < obj.length; index++) {
                if (Boolean(obj[index])) {
                    compactedArray.push(compactObject(obj[index]));
                }
            }
            return compactedArray;
        } else {
            const compactedObj = {};
            for (const key in obj) {
                if (Boolean(obj[key])) {
                    compactedObj[key] = compactObject(obj[key]);
                }
            }
            return compactedObj;
        }
    }
    return obj;
};
