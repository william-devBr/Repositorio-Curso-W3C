/**
 *  author william-devBr github
 *  curso w3c fullstack developer
 *  entendo o uso de push,querySelector, setAttribute, getAttribute, createElement, appendChild, Math.random(), sort, loop for.....
 *  
 */

 document.addEventListener('DOMContentLoaded', ()=>{

 const grid = document.querySelector(".grid");

 for(let i=0 ; i < 9; i++){

       let elem  = document.createElement('div');
           elem.setAttribute('data-id', i);
           elem.classList.add('square');

           grid.appendChild(elem);
 }
const mole = document.querySelectorAll('.mole');
const square = document.querySelectorAll('.square');
var  hitpostion;
let result = 0;
let currentTime = 60;

function randomSquare(){

      square.forEach(element=> {
            element.classList.remove('mole');
      })

      let randomPosition = square[Math.floor(Math.random() * 9  )];

          randomPosition.classList.add('mole');

          hitpostion = randomPosition.dataset.id;

}
 

square.forEach(id => {
        id.addEventListener('mousedown', ()=>{
                
             if(id.dataset.id === hitpostion){

                    result = result + 1;
                    document.querySelector("#score").textContent = result;
             }
            id.classList.remove('square');
            id.classList.add('square-in');
        })

        id.addEventListener('mouseup', ()=>{

             setTimeout(() => {
                id.classList.remove('square-in');
                id.classList.add('square');
             }, 100);
          
        
        })
})

function moveMole(){
    
    let timerId = null;

    timerId = setInterval(randomSquare, 1000);
    
}
  


function contuDown(){

    currentTime--;
    document.querySelector('.time-left').textContent = 'Tempo restante : ' +  currentTime;
    if(currentTime===0){
        clearInterval(timer);
        document.querySelector('.time-left').textContent = 'Tempo esgotado !';

        mole.classList.remove('.mole');

    }
}

let timer = setInterval(contuDown, 1000);

moveMole();

 });