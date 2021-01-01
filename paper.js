class paper {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':0.5,
          'friction':0.1,
          'density':1.2
      }
      
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y, this.r/2,options);
      //console.log(this.body)
      
      World.add(world, this.body);
    }
    display() {
      var pos =this.body.position;
     
      //console.log(pos.x);
     push();
     translate(pos.x, pos.y);
     //rotate(angle);
     strokeWeight(4);
    stroke("green")
     rectMode(CENTER);
     image(this.image,0,0,this.r,this.r/2)
      //fill(255);
      //ellipse(0,0,this.r,this.r)
      pop();
    }
  };