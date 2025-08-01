function rangy(start, end, step = 1){
    let arr = [];
    for(let i = start; i <= end; i+= step){
        arr.push(i);
    }
    if(start > end){
    for(let i = start; i >= end; i+= step){
        arr.push(i);
    }
    }
    return arr;
}

console.log(rangy(5,2,-1));