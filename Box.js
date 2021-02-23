class Box
{
    constructor(x,y,w,h){
    var options={
        restitution:1,
        density:1.2,
        friction:0.8
    }
    this.body= Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h= h;
    World.add(world,this.body);
    }

    display(){
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }

}