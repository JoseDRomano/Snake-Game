//board
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//Snake head
var snakeX = blocksize*5;
var snakeY = blocksize*5;

//Velocity of the snake
var velocityX=0;
var velocityY=0;

//snakeBody

var snakeBody = [];

//food
var foodX ;
var foodY ;

window.onload = function() {
   //chamar a board do html
   board = document.getElementById("board");
   board.height = rows * blocksize;
   board.width = cols * blocksize;
   context = board.getContext("2d"); //used to draw on the board

   placeFood();
   document.addEventListener("keyup", changeDirection);
   
   setInterval(update, 80); //every 80 milisec, redraws
}

function update() {
   context.fillStyle = "black";
   context.fillRect(0 ,0 ,board.width, board.height);

   context.fillStyle = "red";
   context.fillRect(foodX,foodY,blocksize,blocksize);

   if(snakeX == foodX && snakeY == foodY) {
      snakeBody.push([foodX,foodY]) //22:47
      placeFood();
   }
   context.fillStyle = "lime";
   //we need to multiply by blocksize otherwise it will move only 1 pixel at a time
   snakeX += velocityX *blocksize;
   snakeY += velocityY *blocksize;
   context.fillRect(snakeX,snakeY,blocksize,blocksize);


}

function changeDirection(e) {
   if (e.code == "ArrowUp" && velocityY != 1) {
       velocityX = 0;
       velocityY = -1;
   }
   else if (e.code == "ArrowDown" && velocityY != -1) {
       velocityX = 0;
       velocityY = 1;
   }
   else if (e.code == "ArrowLeft" && velocityX != 1) {
       velocityX = -1;
       velocityY = 0;
   }
   else if (e.code == "ArrowRight" && velocityX != -1) {
       velocityX = 1;
       velocityY = 0;
   }
}

function placeFood() {
   //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
   foodX = Math.floor(Math.random() * cols) * blocksize;
   foodY = Math.floor(Math.random() * rows) * blocksize;
}