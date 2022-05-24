class EndBoard {
  constructor(heartIMG, deadRosePNG, liveRosePNG, deathIMG, smallBrokenHeartIMG) {
    push();
    ellipse(300, 300, 300)
    pop();

    textFont(ibmFONT);
    this.fade = new Fade(0, 1, false, true, 255, 255, 255);


    this.heart = {
      img: heartIMG,
      img2: heartIMG,
      img3: heartIMG,
      img4: heartIMG,
      img5: heartIMG,
      img6: heartIMG,
      img7: heartIMG,
      img8: heartIMG,
      img9: heartIMG,
      img10: heartIMG,
      x: 250,
      y: 150,
      x2: 550,
      y2: 500,
      x3: 250,
      y3: 250,
      x4: 550,
      y4: 250,
      x5: 250,
      y5: 350,
      x6: 550,
      y6: 350,
      x7: 250,
      y7: 450,
      x8: 550,
      y8: 450,
      x9: 250,
      y9: 550,
      x10: 550,
      y10: 550,
      appear1: false,
      appear2: false,
      appear3: false,
      appear4: false,
      appear5: false

    }

    this.deadRose = {
      img: deadRosePNG,
      img2: deadRosePNG,
      x: 700,
      y: 100,
      x2: 100,
      y2: 700
    }

    this.death = {
      img: deathIMG,
      img2: deathIMG,
      x: 700,
      y: 400,
      x2: 100,
      y2: 400
    }

    this.liveRose = {
      img: liveRosePNG,
      img2: liveRosePNG,
      x: 80,
      y: 100,
      x2: 700,
      y2: 700
    }

    this.fadeStart = false;

    setInterval(() => {
      this.informationAppear = true;
    }, 1000);

    setInterval(() => {
      this.informationAppear = false;
    }, 2000);

    setTimeout(() => {
      this.fadeStart = true;
    }, 7000);
  }

  update() {
    this.display();
    if(this.fadeStart){
    this.fade.update();
  }
  };

  display() {
    this.backgroundEnd();
    this.displayIcons();
    this.displayInformation();

    if(this.informationAppear){
    this.displayName();
  }
  }

  backgroundEnd() {
    push();
    imageMode(CENTER);
    image(endBoardBG, 400, 400)
    pop();
  }

  displayIcons(){
    push();
    imageMode(CENTER);
    image(this.death.img, this.death.x, this.death.y);
    image(this.deadRose.img, this.deadRose.x, this.deadRose.y)
    image(this.liveRose.img, this.liveRose.x, this.liveRose.y)
    image(this.heart.img, this.heart.x, this.heart.y)
    image(this.heart.img2, this.heart.x2, this.heart.y2)
    pop();
  }

  displayName(){
    push();
    textAlign(LEFT,CENTER);
    textSize(40);
    fill(255);
    text(`Congratulations ` + userName +'!', 70,230)
    pop();
  }
  displayInformation(){
    push();
    textSize(30);
    fill(255);
    text(`Total Grieving Points: 3291320`, 70,350);
    text(`Time: 5 minutes`, 70,400);
    pop();
  }
}
