const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    piggu = new Piggy(810,350);
    log0 = new Loggy(810,260,300,PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pigguJr = new Piggy(810,220);
    log00 = new Loggy(810,180,300,PI/2);
    box5 = new Box(810,160,70,70);
    log000 = new Loggy(760,120,150,PI/7);
    log0000 = new Loggy(870,120,150,-PI/7);
    birdo = new Birdies(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    birdo.display();
    piggu.display();
    pigguJr.display();
    log0.display();
    log00.display();
    log000.display();
    log0000.display();

}