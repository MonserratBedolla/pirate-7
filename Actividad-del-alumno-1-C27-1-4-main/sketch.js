const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var cannon;
var trajectory;

var a = [10, 20, 14, 3, 27, 94]
console.log(a);
console.log(a[4]);
a.push(94);

var balls = []
//length = 6;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  angle= -PI/4;

tower = new Tower (150,350,160,310);
//cambio de tamaño
cannon = new Cannon (180,110,140,50,angle);



  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
  tower.display();
  cannon.display();
  //cannonball.display();

  for (var i=0; i<balls.length;i++ ){
  showCannonBalls(balls[i],i)
  }
 
  Engine.update(engine);

 //console.log(mouseY);
 //console.log(mouseX);
}

function keyPressed(){
  if (keyCode===DOWN_ARROW){
    cannonball = new Cannonball (cannon.x,cannon.y)
    //tiene que esta escrito como cuando llamamos la clase, es decir en minusculas
    balls.push(cannonball)
   }
}

function keyReleased(){
if (keyCode===DOWN_ARROW){
  balls[balls.length-1].shoot()
 }
}

function showCannonBalls(ball,index){
ball.display();
}



// usar para las llaves= {}
// pa los corchetes= []