function loop(valuex, testFunc, updateFunc,bodyFunc){
    for(let value = valuex;testFunc(value);value = updateFunc(value)){
        console.log(value + 'exec');
        bodyFunc();
    }
}
loop(0,(v)=> v < 10,
(v)=> {v+=1; console.log('updating v' + v); return v}, 
()=> console.log('jajajajajaja'));
