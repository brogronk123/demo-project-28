class Tree extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,500,height,angle);
      Matter.Body.setStatic(this.body, true);
      this.image = loadImage("images/tree.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }