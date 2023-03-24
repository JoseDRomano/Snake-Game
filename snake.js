//board
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//Snake head
var snakex = blocksize*5;
var snakey = blocksize*5;

//food
var foodX = blocksize * 10;
var foodY = blocksize * 10;

window.onload = function() {
   //chamar a board do html
   board = document.getElementById("board");
   board.height = rows * blocksize;
   board.width = cols * blocksize;
   context = board.getContext("2d"); //used to draw on the board

   update();
}

function update() {
   context.fillStyle = "black";
   context.fillRect(0 ,0 ,board.width, board.height);

   context.fillStyle = "lime";
   context.fillRect(snakex,snakey,blocksize,blocksize);

   context.fillStyle = "red";
   context.fillRect(foodX,foodY,blocksize,blocksize);
}

function placeFood() {
   foodX = Math.floor(Math.random() * cols);
   foodY = Math.floor(Math.random() * rows);
}