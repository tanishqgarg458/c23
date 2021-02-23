//TANISHQ
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//YOUR PROGRAMS VARS
var engine, world;
var object;
var ground;
var b1, b2,b3;
function setup(){
    createCanvas(400,400);//DEFAULT
    engine = Engine.create();//engine = Matter.Engine.create(); DEFAULT
    world = engine.world;//DEFAULT
    //CREATING YOUR BODIES

ground = new Ground (200,390,400,20)
b1 = new Box(100,200,30,40)
b2 = new Box (200,200,40,30)
b3 = new Box (150,200,40,30)

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
  
   
    b1.display();
    b2.display();
    b3.display();
    ground.display();
}

