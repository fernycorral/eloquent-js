function arrayToList(array){
    let list = null;
    if(array == null)
        return undefined;
    for(let elem of array){
        array.shift();// it is like a pop in java stack
        list = {
            value: elem,
            rest: arrayToList(array)
        }
        console.log(list);
    }
    return list
}

console.log(arrayToList([1,2,3]));