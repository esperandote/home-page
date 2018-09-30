if(localStorage.imgnum){var imgshowing=parseInt(localStorage.imgnum);}
else{var imgshowing=0;}
/*imgshowing specifies the background image. It takes value 1~12.
localStorage.imgnum is the value of imgshowing when you closed the page last time.
*/
var bgimg=document.getElementById('bgimg');
bgimg.src='images/bg'+(imgshowing+1)+'.jpg';
//switch to the next image
function nextimg(){
  bgimg.style.animation='nextimg 1s';
  setTimeout(function(){
    if(imgshowing==11){imgshowing=-1;}
    imgshowing+=1;
    bgimg.src='images/bg'+(imgshowing+1)+'.jpg';
  },400);
  setTimeout(function(){
    bgimg.style.animation='';
  },1000);
}
//stores the value of imgshowing in localStorage.imgnum
window.onunload=function(){
  localStorage.imgnum=imgshowing;
}
