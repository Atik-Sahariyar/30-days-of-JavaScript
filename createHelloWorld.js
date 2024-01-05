const createHelloWorld  = () => {
    return () => "Hello World";
}

const f = createHelloWorld();

console.log(f())