var paperball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	

	engine = Engine.create();
	world = engine.world;
	
	
   
	//Create a Ground and box(left, right and base) bodies of engine
	paperball=new paper(100,100,50)
	ground = new Bin(width/2, 650, width, 10  );
	// World.add(world, ground);
	 bin1= new Bin(540,600,20,100)
	bin2=new Bin(640,645,200,20)
	bin3=new Bin(740,600,20,100)
 	/*boxLeftBody = Bodies.rectangle(300, 600, 20,100 , options);
 	World.add(world, boxLeftBody);

 	boxBottomBody = Bodies.rectangle(410, 625, 200,20 , options);
 	World.add(world, boxBottomBody);

 	boxRightBody = Bodies.rectangle(520, 600, 20,100 , options);
 	World.add(world, boxRightBody);*/
	
	 
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(120);
 bin1.display()
 bin2.display()
 bin3.display()
 paperball.display()
 ground.display()
 /* fill("red")
  rect(300, 600, 20,100);
  rect(410, 640, 200,20);
  rect(520, 600, 20,100);*/

  
   
   
  drawSprites(); 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:95,y:-85});

}


}
	
