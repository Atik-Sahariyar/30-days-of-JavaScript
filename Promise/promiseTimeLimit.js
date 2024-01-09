
const timeLimit =  (fn, t) => {

    return async function (...args) {
        return new Promise(async (resolve, reject) => {
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            try {
                const result = await fn(...args);
                clearTimeout(timeout);
                resolve(result);
            } catch (err) {
                clearTimeout(timeout);
                reject(err);
            }
        });
    };
};

