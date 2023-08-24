var canvas, backgroundImage;
var intro;
var gameState = 0;
var both = 0;
var playerCount;
var allPlayers;
var database;
var ground, groundImage;
var form, player, game;
var users, user1, user2;
var user1_img, user2_img, start_img;
var boundary, boundary2, boundary3, boundary4;
var headder, footer;
var side, side2, side3, side4;
var box, box2, box3, box4, box5, box6, box7, box8, box9;
var contorls, controls, cross;
var allPlayers;
// for deciding behavour of the game
var chance = 1;
var done = 0;
var done2 = 0;
var done3 = 0;
var done1 = 0;
var done4 = 0;
var done5 = 0;
var done6 = 0;
var done7 = 0;
var done8 = 0;
// for checking if player1 wins
var won = 0;
var won2 = 0;
var won3 = 0;
var won4 = 0;
var won5 = 0;
var won6 = 0;
var won7 = 0;
var won8 = 0;
//for cecking if player2 wins
var won9 = 0;
var won10 = 0;
var won11 = 0;
var won12 = 0;
var won13 = 0;
var won14 = 0;
var won15 = 0;
var won16 = 0;
//for checking if game tied
var total = 0;
var time = 0;
var circleImg, circle1;

function preload(){
   start_img = loadAnimation("images/untitled.png", "images/untitled2.png", "images/untitled3.png", "images/untitled4.png", "images/untitled5.png");
   user1_img = loadImage("images/panda_1.png");
   user2_img = loadImage("images/penguin_1.png");
   cross_img = loadImage("images/cross.png")
   circleImg = loadImage("images/circle4.jpg")
}

function setup(){
  canvas = createCanvas(400, 400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  user1 = createSprite( 30,28, 10, 10);
  user1.addImage(user1_img);
  user1.scale = 0.1;
  user2 = createSprite(30, 370, 10,10);  
  user2.addImage(user2_img)
  user2.scale = 0.1;
  
  boundary = createSprite(10, 200, 8, 400)
  boundary.shapeColor = "white";
  boundary2 = createSprite(390, 200, 8, 400)
  boundary2.shapeColor = "white";
  boundary3 = createSprite(200, 390, 400, 8)
  boundary3.shapeColor = "white";   
  boundary4 = createSprite(200, 10, 400, 8);
  boundary4.shapeColor = "white";
  headder = createSprite(200, 50, 375, 8);
  headder.shapeColor = rgb(10,255,255);
  footer = createSprite(200,350,375,8);
  footer.shapeColor = rgb(10,255,255)

  side = createSprite(144, 200, 8, 290);
  side2 = createSprite(268, 200, 8, 290);
  side3 = createSprite(200, 146, 375, 8);
  side4 = createSprite(200, 243,375,8);

  box = createSprite(205,195,120,90);
  box.shapeColor = "white"
  box.visible = false;

  box2 = createSprite(329,195,113,90);
  box2.shapeColor = "red"
  box2.visible = false;

  box3 = createSprite(329,296,113,95);
  box3.shapeColor = "yellow"
  box3.visible = false;

  box4 = createSprite(207,296,120,95);
  box4.shapeColor = "blue"
  box4.visible = false;

  box5 = createSprite(75,296,120,95);
  box5.shapeColor = "green"
  box5.visible = false;

  box6 = createSprite(77,195,123,90)
  box6.shapeColor = "yellow"
  box6.visible = false;

  box7 = createSprite(77,100,123,85);
  box7.shapeColor = "blue"
  box7.visible = false;

  box8 = createSprite(205,98, 120, 88);
  box8.shapeColor = "red"
  box8.visible = false;

  box9 = createSprite(329,98,118,88);
  box9.shapeColor = "green"
  box9.visible = false;

   contorls = createSprite(320, 30,130,30);
  contorls.shapeColor = "grey";
 
  controls = createSprite(200,200,400,400);
  controls.visible = false;
 
  cross = createSprite(20,20,10,10);
  cross.shapeColor = "white"
  cross.addImage(cross_img)
  cross.visible = false;
  cross.scale = 0.5


   circle1 =  createSprite(box9.x,box9.y,10,10)
   circle1.addImage(circleImg)
   circle1.scale = 0.15
   circle1.visible = false;


}

function draw(){
   console.log(gameState + "g")

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
 if(chance === 1 && mousePressedOver(box9) && done8 === 0){
    chance = 2
    done8 = 1
    won10 = won10 +1;
    won12 = won12 +1;
    won16 = won16+1;
    total = total +1;
    circle1.visible = true;
    both = 1
    game.both_update(1);
}

if(both === 1 && player.index === 1){
     chance = 2
    done8 = 1
    won10 = won10 +1;
    won12 = won12 +1;
    won16 = won16+1;
    total = total +1;
    circle1.visible = true;
    both = 1
    game.both_update(1);
}


console.log(both);

}
