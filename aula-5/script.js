/**
 *  Arrays e iterators javascript
 *@ Aula-5 Curso wc3 Fullstack developer
 *@ author  william-devBr github
 */


let myPicturesArray = [
    {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796"
    },
    {
    "albumId": 2,
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "url": "http://placehold.it/600/8e973b",
    "thumbnailUrl": "http://placehold.it/150/8e973b"
    },
    {
    "albumId": 2,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "http://placehold.it/600/121fa4",
    "thumbnailUrl": "http://placehold.it/150/121fa4"
    },
    {
    "albumId": 3,
    "id": 127,
    "title": "magnam quia sed aspernatur",
    "url": "http://placehold.it/600/74456b",
    "thumbnailUrl": "http://placehold.it/150/74456b"
    },
    {
    "albumId": 3,
    "id": 128,
    "title": "est facere ut nam repellat numquam quia quia eos",
    "url": "http://placehold.it/600/b0931d",
    "thumbnailUrl": "http://placehold.it/150/b0931d"
    }
    ];
    
    // carreg as imagens
    
    myPicturesArray.forEach(function(currentImage) {
       let image = document.createElement("img");
       image.src = currentImage.thumbnailUrl;
       image.alt = currentImage.title;
       image.title = currentImage.title;
       image.classList.add('box-img');

       document.querySelector("#content").append(image);

      ab(image);
    });


    function ab(evt){

      
        let text = document.createElement('div');
            text.classList.add('description');
               

        evt.onmouseenter = function(elem){  
          
        text.textContent = elem.target.title;
        
        document.querySelector("#content").insertBefore(text, elem.target);
        document.querySelector("#content").append(text);

        evt.onmouseout = function(){

            text.textContent = '';
        }
       

       } //mouseenter

}

