class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.Sling= Constraint.create(options);
        World.add(world, this.Sling);
    }

    fly(){
        
    }

      display(){
           
            strokeWeight(4);
            line(this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        
    }
    
}



