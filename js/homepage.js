if(localStorage.imgnum){var imgshowing=parseInt(localStorage.imgnum);}
else{var imgshowing=0;}
/*imgshowing specifies the background image. It takes value 1~12.
localStorage.imgnum is the value of imgshowing when you closed the page last time.
*/
var bgimg=document.getElementById('bgimg');
bgimg.src='images/bg'+(imgshowing+1)+'.jpg';
//animation where 'someimg' gets dark
function dark(someimg){
  var o=1;
  function darkstep(someimg){
    o-=0.2;
    someimg.style.opacity=o;
    if(o<0.05){
      clearInterval(t);
    }
  }
  var t=setInterval(function(){darkstep(someimg)},60);
}
//animation where 'someimg' gets light
function light(someimg){
  var o=0;
  function lightstep(someimg){
    o+=0.2;
    someimg.style.opacity=o;
    if(o>=1){
      clearInterval(t);
    }
  }
  var t=setInterval(function(){lightstep(someimg)},60);
}
//switch to the next image
function nextimg(){
  dark(bgimg);
  setTimeout(function(){
    if(imgshowing==11){imgshowing=-1;}
    imgshowing+=1;
    bgimg.src='images/bg'+(imgshowing+1)+'.jpg';
    light(bgimg);
  },300);
}
//stores the value of imgshowing in localStorage.imgnum
window.onunload=function(){
  localStorage.imgnum=imgshowing;
}
