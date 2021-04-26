//Create NameSpacing for Matter Modules
const Engine = Matter.Engine
const World = Matter.World
const Constraint = Matter.Constraint
const Bodies = Matter.Bodies

function preload(){

}
function setup(){
canvas = createCanvas(windowWidth / 2,windowHeight/1.5);
engine = Engine.create();
world = engine.world;
let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio=pixelDensity();
let options = {
    mouse:canvasmouse
};
mConstraint = MouseConstraint.create(engine,options);
// World.add(world,.Constraint);


    
Engine.run(engine);

pendulum1 = new Pendulum(140,100,"pink");
string1 = new Sling(pendulum1.body,{x:140,y:30})

pendulum2 = new Pendulum(200,100,"pink");
string2 = new Sling(pendulum2.body,{x:200,y:30})

pendulum3 = new Pendulum(260,100,"pink");
string3 = new Sling(pendulum3.body,{x:260,y:30})

pendulum4 = new Pendulum(320,100,"pink");
string4 = new Sling(pendulum4.body,{x:320,y:30})

}
function draw(){
    background("teal");
    
 
   
    
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
     string1.display();
    string2.display();
    string3.display();
    string4.display();

    
    

}

function mouseDragged(){
Matter.Body.setPosition(pendulum1.body{x:mouseX, y:mouseY});
}


