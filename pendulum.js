class Pendulum{
    constructor(x,y,color){
        var options={
         restituiton:1,
         friction:0,
         frictionAir:0.0,
         slop:1,
         density:2,   
         intertia:Infinity
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.x = x;
        this.y = y;
        this.color = color;
        this.image = loadImage("ball.png");
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        imageMode(CENTER);
        image(this.image, 0, 0,60,60);
        pop()
    }
}
