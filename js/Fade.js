class Fade {
  // class to create fade in and out of states
  constructor(opacity, speed, fadeIn, fadeOut) {
    this.whiteRect = true;
    this.fadeIn = fadeIn;
    this.fadeOut = fadeOut;
    this.opacity = opacity;

    this.fadeColor = {
      r: 255,
      g: 255,
      b: 255
    }

    this.fadeSpeed = speed;
  }

  update(){
    // white rectangle for fade in/out
    if (this.whiteRect){
      push();
      rectMode(CENTER);
      noStroke();
      fill(this.fadeColor.r,this.fadeColor.g,this.fadeColor.b,this.opacity);
      rect(width/2, height/2, width, height)
      pop();
      // fade in or out
      if (this.fadeIn) {
        this.opacity = this.opacity - this.fadeSpeed;
      }
      else if(this.fadeOut){
        this.opacity = this.opacity + this.fadeSpeed;
      }
    }
  }
}
