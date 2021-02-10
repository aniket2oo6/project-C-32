class ball{
    constructor(x,y,radius){
var options={
    isStatic: false,
    restitution: 0.8,
    friction: 0.6,
    density: 0.5
}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
World.add(world,this.body);
    }
    display(){
        var a = this.body.position;
        var b = this.body.angle;
        if(a.x>=950 && a.y>=300){
            score = score + 1;
        }
        push();
        translate(a.x,a.y);
        rotate(b);
        ellipseMode(CENTER);
        fill("orange");
        ellipse(0,0,this.radius);
        pop();
    }
}