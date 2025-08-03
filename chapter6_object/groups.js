class Group {
  // Your code here.
  constructor(){
      this.array = [];
  }
  static from(array){
      let g = new Group();
      g.array = array
      return g;
  }
  
  has (int){
      return this.array.includes(int);
  }
  
  delete(int){
     this.array = this.array.filter( v => v != int);
  }
  
  add(int){
      if(!this.array.includes(int)){
          this.array.push(int);
      }
  }
    
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
