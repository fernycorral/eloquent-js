function printChess(size){
    for(let i = 0; i < size; i++){
        let line = '';
        
        for(let y = 0; y < size; y++){
            let val = i + y;
            if(val % 2)
                line+=' ';
            else
                line += '#'
        }
        console.log(line);
    }
}
printChess(8);