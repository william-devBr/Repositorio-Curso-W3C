/**
 *  author william-devBr github
 *  curso w3c fullstack developer
 *  entendo o uso de push,querySelector, setAttribute, getAttribute, createElement, aapendChild, Math.random(), sort, loop for.....
 *  
 */

 document.addEventListener('DOMContentLoaded', ()=>{

const images = [

    {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
];

images.sort(()=> 0.5 - Math.random());

const _divParent = document.querySelector("#content");
var cardChoose = [];
var  cardChooseId = [];
var cardsWon = [];



function createBoard(){

    for(let i=0 ; i < images.length; i++){

        var card = document.createElement('img');
            card.setAttribute('data-id', i);
            card.setAttribute('src','images/blank.png');
            card.addEventListener('click', flipCard)
            _divParent.appendChild(card);

    }
}




function flipCard(){

       var cardId = this.getAttribute('data-id');
  
      cardChoose.push(images[cardId].name);
      cardChooseId.push(cardId);

      this.setAttribute('src', images[cardId].img);

      if(cardChoose.length === 2){

          setTimeout(checkForMatch, 500);
      }
}


function checkForMatch(){

    var cards = document.querySelectorAll('img');

    const optionsOne = cardChooseId[0];
    const optionsTwo = cardChooseId[1];

    if(cardChoose[0] === cardChoose[1]){

          alert('Par encontrado :)');

          cards[optionsOne].setAttribute('src','images/white.png');
          cards[optionsTwo].setAttribute('src','images/white.png');

          cards[optionsOne].removeEventListener('click', flipCard);
          cards[optionsTwo].removeEventListener('click' , flipCard);
            
          cardsWon.push(cardChoose)

    }else {

        cards[optionsOne].setAttribute('src','images/blank.png');
        cards[optionsTwo].setAttribute('src','images/blank.png')
    }
    cardChoose = [];
    cardChooseId = [];
}
 

createBoard();

 });