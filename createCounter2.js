
const createCounter = (init) => {
    let counterValue = init
    return {
        increment: () => {
            counterValue++
            return counterValue
        },
        decrement: () => {
           counterValue--
           return counterValue
        },
        reset: () => {
            counterValue = init
            return counterValue
        },
    }
}

const n = 5;
const counter = createCounter(n);


console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
