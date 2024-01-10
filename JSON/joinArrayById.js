
const join = (arr1, arr2) => {
    const idMap = new Map();

    for(const obj of arr1.concat(arr2)){
        const id = obj.id;
        if(!idMap.has(id)){
            idMap.set(id, {});
        }
        Object.assign(idMap.get(id), obj);
    };
    return [...idMap.values()].sort((a, b) => a.id - b.id);
};