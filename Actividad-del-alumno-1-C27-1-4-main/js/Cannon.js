class Cannon {
 
 
    constructor (x,y,width,height,angle){
   this.x=x;
   this.y=y;
   this.width=width;
   this.height=height;
   this.angle=angle;
}
display() {

//if incorrectos, les hace falta otra condición para evitar que den la vuelta completa
 if(keyIsDown(RIGHT_ARROW)&&this.angle<0.35){
            this.angle += 0.02;
        }

        if(keyIsDown(LEFT_ARROW)&&this.angle>-1.45){
            this.angle -= 0.02;
        }



    fill("#676e6a");
push ();

translate (this.x,this.y);
rotate (this.angle);

//cambio en el tamaño del objeto
rect (10,-10,this.width,this.height);
pop ();
//cambio en el tamaño del objeto
arc (this.x-30,this.y+90,80,100,PI,TWO_PI);
noFill();

}

}