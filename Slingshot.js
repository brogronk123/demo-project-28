class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    // fly(){
    //     
    // }

    display(){
        if(this.sling.bodyA===null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke(48,22,8);
            strokeWeight(7);
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}