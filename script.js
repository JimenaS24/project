function setup(){
 createCanvas(400,400);
 frameRate(75);
 background(250, 223, 150);
  let snake= {x: 150, y:150} 
             {x: 140, y:150}, 
             {x:140, y:150}, 
             {x: 120, y: 150},
             {x:110, y:150},];

 function draw(){
  function drawsnakePart(snakePart){
    ctx.fillStylr = 'lightgreen';
    ctx.strokestyle = 'darkgreen';
    ctx.fillRect(snakepart.x,snakepart.y, 10,10);
    ctx.strokeRect(snakepart.x, snakepart.y, 10,10);
  }
  function drawSnake(){
    snake.forEach(drawSnakePart);
  
    
   
