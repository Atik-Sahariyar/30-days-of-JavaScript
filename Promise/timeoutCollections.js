const cancellable = (fn, args, t) => {
    let cancel = false;
  
    const executeFn = () => {
        if(!cancel){
            const result = fn(...args);
            console.log([{time: Date.now(), returned: result}]);
        }
    };
  
    const cancelFn = () => {
        cancel = true;
        console.log([]);
    };
  
    setTimeout(executeFn, t);
  
    return cancelFn;
  };
  
  // test case 1
  
  const fn1 = (x) => x * 5;
  const args1 = [2];
  const t1 = 20;
  const cancelTimeMs1 = 50;
  
  const cancelFn1 = cancellable(fn1, args1, t1);
  setTimeout(cancelFn1, cancelTimeMs1 )
  