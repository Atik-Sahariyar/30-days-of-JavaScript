/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = (functions) => {
    return new Promise((resolve, reject) => {
        let results = [];
        let completedCount = 0;
        let rejected = false;
        let completedTime = 0;

        functions.forEach((func, index) => {
            func().then(
                (result) => {
                    if(!rejected){
                        results[index] = result;
                        completedCount++;
                        if( completedCount === functions.length){
                            completedTime = Date.now();
                            resolve(results)
                        }
                    }
                },
                (error) => {
                    if(!rejected){
                        rejected = true;
                        completedTime = Date.now();
                        reject(error)
                    }
                }
            )
        });
    });
};


  const promise = promiseAll([() => new Promise(res => res(42))])
  promise.then(console.log); // [42]
