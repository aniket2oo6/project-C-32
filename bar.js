class bar{
    constructor(x,y,width,height){
var options={
    isStatic: true
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);
    }
    display(){
var d = this.body.position;
rectMode(CENTER);
fill("black");
rect(d.x,d.y,this.width,this.height);
    }
}