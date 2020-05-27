
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
 var ball1 = {


    x : 200,
     y : 200,
     radius : 60,
     color : 'green',
     speedX : 4,
     speedY : 2

 }



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
     movPlayer(player)
}



function mainLoop(){

    ctx.clearRect(0, 0, w,h);

    drawRetangle(player);
    drawBall(ball);
    drawBall(ball1);


    moveBall(ball);
    moveBall(ball1)

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

function movPlayer(p){

    
    document.addEventListener('keydown', function(evt){
            console.log(evt.keyCode)
        switch(evt.keyCode){

            case 38 : p.y -= 10; break;
            case 40 : p.y += 10; break;
            case 37 : p.x -= 10; break;
            case 39 : p.x += 10; break;
            default : ''; 
        }
        colisionPlayer(p);
    })

  
    
    console.log(p);
}


function colisionPlayer(p){

    if(p.x > w){

        p.x = w -20;

    }else if( p.x < 0){

         p.x += 10;
    }
    if(p.y > h){
        p.y = h -20;
    }else if( p.y < 0){

         p.y += 10;
    }
}