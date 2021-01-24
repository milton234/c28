class SlingShot{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=point2
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    display(){
        
        if(this.slingShot.bodyA){
            var positionA = this.slingShot.bodyA.position;
            strokeWeight(4);
            line(positionA.x, positionA.y, this.pointB.x, this.pointB.y);
        }
    }
    
    flight(){
        this.slingShot.bodyA=null
    }
}

