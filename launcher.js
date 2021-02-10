class launcher{
    constructor(bodyA,pointB){
var options={
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 10
}
this.image1 = loadImage("sling1.png");
this.image2 = loadImage("sling2.png");
this.pointB = pointB;
this.launch = Constraint.create(options);
World.add(world,this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }

    display(){
image(this.image1,100,550,40,40);
image(this.image2,95,545,20,20);
if(this.launch.bodyA){
    var pointA = this.launch.bodyA.position;
    var pointB = this.pointB;
    push();
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
}
    }
}