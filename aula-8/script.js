/**
 * author william-devBr github
 *  curso fullstack web developer
 *   Html5 javascript
 */


document.addEventListener("DOMContentLoaded", () => {

  const video  = document.getElementById("video");
  const play = document.getElementById("play");
  const pause = document.getElementById("pause");
  const rewnd = document.getElementById("rewind");
  let current = document.getElementById("current");
  

  video.poster  ='https://i.ytimg.com/vi/MTRsA0Mh1dE/maxresdefault.jpg  ';

 
   play.onclick = ()=> {

      video.play();
      document.querySelector(".duration").innerHTML = "Tempo vídeo : " + video.duration.toFixed(0) / 100; 

  }

    pause.onclick = ()=>{

        video.pause();
  }

  rewnd.onclick = () =>{
    video.poster = 'https://i.ytimg.com/vi/MTRsA0Mh1dE/maxresdefault.jpg';
       video.currentTime = 0;
      
  }

 function atualiza(){

      var tempo = video.currentTime;

      current.innerText = tempo.toFixed(0);
 }

 setInterval(atualiza, 1000);

 

})