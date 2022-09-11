//let contenedor = [];

function Tree(value){
    this.data = value;
    this.right = null;
    this.left = null;
  }
  
  Tree.prototype.add = function(value){
    if(value < this.data){
      if(this.left == null){
      this.left = new Tree(value)
      }else{
        this.left.add(value)
      }
      
    }else{
     if(this.right == null){
      this.right = new Tree(value)
     }else{
       this.right.add(value)
     }
    }
  }
  
  let tree = new Tree(50);
  tree.add(23)
  tree.add(25)
  tree.add(60)
  tree.add(58)
  tree.add(2)
  tree.add(5)
  tree.add(65)
  //contenedor.push(tree.value);
  
  
  console.log('**************************************')
  console.log(tree)
  //console.log(contenedor)
  




