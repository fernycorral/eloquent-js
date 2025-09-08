function reverseArray(array){
    let reversedArray = [];
    for(let i = array.length -1; i >= 0; i--){
        reversedArray.push(array[i]);
    }
    return reversedArray;
}


const reverseArrayInPlace = (array)=> {
    let i1 = array.length -1;
    let i2 = 0;
    while(i1 > i2){
        let temp = array[i1];
        array[i1] = array[i2];
        array[i2] = temp;
        i1--;
        i2++;
    }
    return array;
}
