/**
 * author william-devBr github
 *  curso fullstack web developer
 *   Game Snack
 */



 document.addEventListener("DOMContentLoaded", ()=> { 
     
      const _elem = [
             {
                srcImg :'https://i.imgur.com/wGRFC2Lb.jpg' ,
                title : 'Categoria1' ,
                categoria : 'Produto1' ,
             },
             {
              srcImg :'https://i.imgur.com/Tj1bKhLb.jpg' ,
              title :'Categoria2' ,
              categoria : 'Produto2' ,
           },
           {
              srcImg : 'https://i.imgur.com/rQjt0IHb.jpg',
              title : 'Categoria3',
              categoria : 'Poduto3'
           },
           {
              srcImg :'https://i.imgur.com/ghzQIxyb.jpg' ,
              title :'Categoria2' ,
              categoria : 'Produto2' ,
           },
      ];


       let catLink = document.querySelectorAll(".nav-link li");
     
            catLink.forEach(function(elem){
   
               elem.addEventListener('click', (evt)=> {
                       evt.preventDefault();
                       let text = evt.target.textContent;
                      // let titleSect = document.querySelector(".title-section");
                       document.querySelector("#load-page").style.display = "block";
                       document.querySelector("#load-page").innerText = "Carregando...";
                       setTimeout(()=>{
                            document.querySelector("#load-page").style.display = "none";
                           // titleSect.innerText = text;
                            loadCategoria();
                       },2000)
                     
               })
     });

 function loadCategoria(){ 
  
        const _ul = document.querySelector(".link-section");
               _ul.innerHTML = '';
        for(let i = 0; i < _elem.length; i++){

              let _li = document.createElement("li");
                  _li.innerHTML += `<figure>
                                     <img class="thumbnail" src="${_elem[i].srcImg}" alt="#${_elem[i].title}" />
                                     <figcaption>${_elem[i].title}</figcaption>
                                    </figure>`;
                  

                _li.addEventListener('click',function(evt){
                     divPage(evt)
                });

                _ul.appendChild(_li);
             }

     } // function

     function divPage(data){
  
         let  elem = data.target.parentNode ;
         const _divPage = document.getElementById("page");
         const close = document.createElement('span');
               close.className = "close";
               close.innerText = "X";

               _divPage.className = "page";

               _divPage.appendChild(close);
               _divPage.appendChild(elem);

         document.querySelector(".close").addEventListener("click", function(evt){

              const _parent = evt.target.parentNode;
                    _parent.className = "none";
                    _parent.removeChild(_divPage.lastElementChild);
                    _parent.removeChild(_divPage.lastElementChild);
                    loadCategoria();
         });

     }
}); 