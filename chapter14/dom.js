let arrayish = {0:"one", 1:"twp", length: 3};
let array =  Array.from(arrayish);
console.log(array);
console.log(array.map(s => s.toUpperCase()));

