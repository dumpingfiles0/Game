class Game {
  constructor(){

  }

getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

 update(state){
    database.ref('/').update({
      gameState: state
    });
  } 

read(){
   var bothRef = database.ref('both');
   bothRef.on("value",function(data){
     both = data.val();
   })

  }  

both_update(both){
   database.ref('/').update({
       both: both
   })
}

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  
  } 

  play(){
    background(0);
    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
    

      var index = 0;
     for(var plr in allPlayers){

       index = index + 1 ;
    if (index === player.index){
      if(player.index === 1){
      fill(rgb(10,255,255))
      textSize(20)
      text("player1: " + player.name, 85, 35);
      }
      if(player.index === 2){
          fill(rgb(10,255,255))
          textSize(20)
          text("player2: " + player.name, 85, 380);
      }
     // console.log(player.index);
     }
    }
  }


    drawSprites();
  fill("yellow")
  text("rules", 260, 35)

  }
};  