class Dustbin {
    constructor(x,y,dustbinHeight,dustbinWidth,wallThickness,angle) { 
    
    this.x=x; 
    this.y=y;
    this.dustbinWidth=200; 
    this.dustbinHeight=100;
     this.wallThickness=20; 
     this.angle=0;
     this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness, {isStatic:true})
     World.add(world, this.bottomBody)

    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,{isStatic:true}) 
    Matter.Body.setAngle(this.leftWallBody, this.angle);
    World.add(world,this.leftWallBody)


    this.rightWallBody= Bodies.rectangle(this.x+ this.dustbinWidth/2,this.y-dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
     World.add(world,this.rightWallBody)
     Matter.Body.setAngle(this.rightWallBody, this.angle);
    }
    display(){
    var bottom = this.bottomBody.position
    var left=  this.leftWallBody.position
    var right= this.rightWallBody.position

    push() 
    
   rectMode(CENTER);
    angleMode(RADIANS)
   fill(255)
    stroke(255)
    rotate(this.angle)
    rect(left.x, left.y,this.wallThickness, this.dustbinHeight); 
    pop()

    push() 
   
   rectMode(CENTER);
    angleMode(RADIANS)
   fill(255)
    stroke(255)
    rotate(this.angle)
    rect(right.x, right.y,this.wallThickness, this.dustbinHeight); 
    pop()

    push() 
   rectMode(CENTER);
    angleMode(RADIANS)
   fill(255)
    stroke(255)
    rotate(this.angle)
    rect(bottom.x, bottom.y,this.dustbinWidth,this.wallThickness); 
    pop()

    }
    }