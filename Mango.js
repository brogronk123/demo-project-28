class Mango extends BaseClass{
    constructor(x,y){
      super(x,y,50,50);
      Matter.Body.setStatic(this.body, true);
      this.image = loadImage("images/mango.png");
    }
  }