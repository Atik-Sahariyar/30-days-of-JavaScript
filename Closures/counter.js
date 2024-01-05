
const createCounter = (n) => {
    return () => n++
}

const num = 10
const counter = createCounter(num);

counter()
counter()
counter()

console.log(num)