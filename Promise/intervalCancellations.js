const cancellable = (fn, args, t, cancelTimeMs) => {
    let intervalId;
    let time = 0;
    const result = [];

    const invokeFn = () => {
        const returned = fn(...args);
        result.push({ time, returned });
        time += t;

        if (time >= cancelTimeMs) {
            clearInterval(intervalId)
        }
    };

    invokeFn();
    intervalId = setInterval(invokeFn, t);

    return () => {
        clearInterval(intervalId)
    };
};


const result = [];

const fn = (x) => x * 2;
const args = [4], t = 35, cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) });
}

const cancel = cancellable(log, args, t);
setTimeout(cancel, cancelTimeMs);
setTimeout(() => {
    console.log(result);
}, cancelTimeMs + t + 15)    
