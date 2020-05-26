/*
**
** @Aula 2 - prática e fundamentos javascript
**
** Drag and Drop web Browser
** @author  william-devBr  github
*/


function drag(target, event){
    
    // pega o ID do objeto a ser arrastado
    event.dataTransfer.setData("browser", target.id);
}


function drop(target, event){

    var id = event.dataTransfer.getData("browser");

    target.appendChild(document.getElementById(id));

    event.preventDefault();
}