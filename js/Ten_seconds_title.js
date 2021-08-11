class Ten_seconds_title {
  constructor() {

    this.whiteRect = true;
    this.fadeIn = true;
    this.fadeOut = false;
    this.opacity = 255;

    this.fadeSpeed = 2;

    this.quote1 = true;
    this.quote2 = false;

// fade in and out system
    setTimeout(() => {
      this.quote1 = true;
      setTimeout(() => {
        this.fadeIn = false;
        this.fadeOut = true;
        setTimeout(() => {
          this.quote1 = false;
          this.quote2 = true;
          this.fadeOut = false;
          this.fadeIn = true;
          setTimeout(() => {
            this.fadeIn = false;
            this.fadeOut = true;
          }, 6000);
        }, 6000);
      }, 2000);
    }, 3000);

    setTimeout(() => {
      currentState = new Alliance_of_harmony_title();
    }, 25000);

    introSFX.play();
    introSFX.setVolume(0.05);

    setTimeout(() => {
      introSFX2.play();
      introSFX2.setVolume(0.07);
    }, 16000);
  }

  update() {

    push();
    textAlign(CENTER, CENTER);
    if (this.quote1) {
      textSize(30);
      textFont("futura");
      fill(0)
      text(`A person can stand just about anything for 10 seconds...`, width / 2, height / 2);
    }
    if (this.quote2) {
      textSize(30);
      textFont("futura");
      fill(0)
      text(`...then you just start on a new 10 seconds.`, width / 2, height / 2);
    }
    pop();
    console.log(this.quote1)

    // white rectangle for fade in/out
    if (this.whiteRect){
      push();
      rectMode(CENTER);
      noStroke();
      fill(255,255,255,this.opacity);
      rect(width/2, height/2, width, height)
      pop();
      if (this.fadeIn) {
        this.opacity = this.opacity - this.fadeSpeed;
      }
      else if(this.fadeOut){
        this.opacity = this.opacity + this.fadeSpeed;
      }
    }

  }

  display() {

  }

  mousePressed() {

  }
}
