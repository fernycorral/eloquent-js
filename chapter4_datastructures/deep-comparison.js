function deepEqual(val1, val2){
  if(typeof val1 =='object' && val1 != null && typeof val2 =='object' && val2 != null){
    for(let prop of Object.keys(val1)){
      let areEq = deepEqual(val1[prop], val2[prop]);
      if(!areEq) return false;
    }
    return true;
  }else return val1 === val2;
}
