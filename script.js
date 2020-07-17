// select canvas
const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");

//draw rect function

function drawRect(x,y,w,h,color){
  ctx.fillstyle = color;
  ctx.fillRect(x,y,w,h);
}

drawRect(0,0, cvs.width, cvs.height, "BLACK");

//draw circle


