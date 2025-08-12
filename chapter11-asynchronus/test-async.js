async function printCrazy(element){
    for (let i = 0; i < 10; i++){
       console.log(i + element);
       await new Promise( resolve => setTimeout(resolve, 100));
    }
}

const myTest = async function testAsync(val){
     //for(let i = 0; i < 5; i ++){
    await Promise.all([printCrazy(val),    printCrazy("NIE--------")]);  
     
        console.log('done 2');
    
}

myTest("aver");