let container = [];

function Tree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
  
}

Tree.prototype.add = function (value) {
  if(this.value > value){
      if(!this.left) this.left = new Tree(value);
      else this.left.add(value);
    } else {
      if (this.right) this.right = new Tree(value);
      else this.right.add(value);
    }
};

Tree.prototype.reco = function(){
  if(this.left) this.left.reco();
  container.push(this.value);
  
  if(this.right) this.right.reco();
};


let tree = new Tree(50);
tree.add(23);
tree.add(25);
tree.add(60);
tree.add(58);
tree.add(2);
tree.add(5);
tree.add(65);
container.push(tree.left.value);
console.log(tree.reco);


console.log(tree)
console.log(container)



