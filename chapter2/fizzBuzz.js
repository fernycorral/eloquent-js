function replaceFizzBuzz(){
 for(let i =1; i<= 100;i++){
    let res = '';
    if(i % 3 === 0){
        res = 'Fizz';
    }
    if(i % 5 === 0){
        res += 'Buzz';
    }
   // if(res.length === 0)
     //   res = i;

    console.log(res || i); // you can save one if by using ||
 }
}
replaceFizzBuzz();