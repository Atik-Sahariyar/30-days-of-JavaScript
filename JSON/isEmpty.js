
const isEmpty =  (obj) => {
    if (Array.isArray(obj)) {
        if (obj.length === 0) {
            return true
        }
        } else if(typeof obj === 'object' && JSON.stringify(obj) === '{}'){
            return true
        }
        return false
   
};
