class GhostScare {
constructor(){
  this.ghostAppear = false;
  this.blackBackground = false;
  this.mainLevelPage = false;
  setTimeout(() => {
    this.ghostAppear = true;
    // startSFX.amp(0.05);

    // startSFX.play();
  }, 1000);

  setTimeout(() => {
    this.blackBackground = true;
  }, 2500);
  setTimeout(() => {
    this.mainLevelPage = true;
  }, 5000);
}
  update(){
    push();
    noStroke();
    rectMode(CENTER);
    fill(255);
    rect(400,400,width,height);
    pop();

    if(this.ghostAppear){
      this.displayGhost();
    }
    if(this.blackBackground){
      this.displayBlackBG();
    }
    if(this.mainLevelPage){
       currentState = new Main_Level_Page_5(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
    }

  }

 displayGhost(){
   push();
   imageMode(CENTER);
   image(ghostIMG, 400,400);
   image(deathGIF, 400,275);
   pop();

   if (!ghostSFX.isPlaying()) {
     ghostSFX.play();
     setTimeout(() => {
       this.soundOff = true;
     }, 3000);
   }
   if (this.soundOff) {
     ghostSFX.stop();
   }
 }

 displayBlackBG(){
   push();
   noStroke();
   rectMode(CENTER);
   fill(0);
   rect(400,400,width,height);
   pop();
 }

 mouseDragged(){

 }
 keyTyped(){

 }
 keyPressed(){

 }
 mouseReleased(){

 }
 mousePressed(){
   
 }
}
