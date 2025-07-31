function printTriangle(){
    let tree = '*';
    for(let i = 0; i < 7; i++){
        console.log(tree);
        tree += '*';
    }
}
//solution improved
function improvePrintTree(){
    for (let line = "#"; line.length < 8; line += "#")
        console.log(line);

}

printTriangle();