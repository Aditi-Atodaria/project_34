class Sling{
    constructor(bodyA,pointB){
  var options={
      bodyA:bodyA,
      pointB:pointB,
      stiffness:1,
      angularStifnesss:1,
      length:220
  }
  this.pointB = pointB;
  this.pointX = bodyA.x;
  this.pointY = bodyA.y - 250;
  this.sling = Constraint.create(options);
  World.add(world,this.sling);
}
 display(){
     
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
         push()
         strokeWeight(2);
         stroke("white");
         line(pointB.x,pointB.y,pointA.x,pointA.y);
         pop()
     
 }
    
}
