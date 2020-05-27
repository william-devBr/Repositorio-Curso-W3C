
 /**
  * @Author william-devBr git hub
  * @App    bolas rolantes
  *         Aula 3 curso edx-w3c   web developmente
  * Colison ball Game
  */
 


 
 var canvas , ctx, h,w;
    
 var ball = {
     
     x : 100,
     y : 100,
     radius : 30,
     color : 'blue',
     speedX : 2,
     speedY : 1
 };

 var player = {

     x : 10,
     y : 10,
     width : 20,
     height :20,
     color : 'red'

 }



window.onload = function init(){

     canvas = document.getElementById("canvas");
     ctx    = canvas.getContext("2d");

     w      = canvas.width;
     h      = canvas.height;

     mainLoop();
   
}



function mainLoop(){

    ctx.clearRect(0, 0, w,h);

    drawRetangle(player);
    drawBall(ball);

    moveBall(ball);

    requestAnimationFrame(mainLoop);
}


function drawRetangle(r){
 
      ctx.save();

      ctx.translate(r.x, r.y);

      ctx.fillStyle = r.color;

      ctx.fillRect(0, 0, r.width, r.height);

      ctx.restore();
}


function drawBall(c){
 
    ctx.save();

    ctx.translate(c.x, c.y);

    ctx.fillStyle = c.color;

    ctx.beginPath();
    ctx.arc(0, 0 , c.radius, 0, 2 * Math.PI);

    ctx.fill();

    ctx.restore();
     

}

function testColisionBall(b){

    if((b.x + b.radius ) > w){

         b.speedX = -b.speedX;

         b.x = w - b.radius;


    }else if((b.x - b.radius) < 0){
 
         b.speedX = -b.speedX;

        b.x = b.radius;
    }

    if((b.y + b.radius) > h){

        b.speedY = -b.speedY;
    

        b.y = h - b.radius;
    }else if((b.y - b.radius) < 0){

        b.speedY = -b.speedY;
    
        b.Y = b.radius;
    }

}

function moveBall(b){

    b.x += b.speedX;
    b.y += b.speedY;
    
    testColisionBall(b);
  
     
}