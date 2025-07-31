function countBs(str){
let counter =0;
    for(let i = 0; i<str.length;i++){
        if(str[i] === 'B')
            counter++;
    }
    return counter;
}

function countChar(str,chr){
let counter =0;
    for(let i = 0; i<str.length;i++){
        if(str[i] === chr)
            counter++;
    }
    return counter;
}
console.log(countBs('sdgdBsbSDdgdBdsdfs'));
console.log(countChar('sdgdBsbSDdgdBdsdfs','s'));