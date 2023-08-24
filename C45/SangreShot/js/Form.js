class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Tic-Tac-Toe");
    this.title.position(140, 100);
    this.input.position(120, 200);
    this.button.position(195, 230);
    this.reset.position(325, 360);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(200, 200);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      game.both_update(0);
    });

  }
}
