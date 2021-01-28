class Form {
    constructor() {
      this.input = createElement("h2");
      this.infom = createElement('h2');
      this.button = createButton('Play');
      this.title = createElement('h2');
      this.ques = createElement('h2');
      
    }
    hide(){
      this.infom.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.ques.hide();
     // this.ground.hide();
    }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2 - 30, 0);

      this.infom.html("if you hit the obstacle or give the worong questiong then you starts from you starting point");
      this.infom.position(displayWidth/2 - 85, 0);

      this.input.html("press space to jump");
      this.input.position(displayWidth/2 - 85, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      //gameState = "rules"

      //if(gameState === "rules"){
       //ground.hide();
        //obstacle.visible = false;

      //}
  2
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide()
        gameState = "play"
      });

      /*if(gameState === "play"){
        ground.visible = true; 

      }*/
    }
};
    

 