class EndBoard {
  constructor(heartIMG, deadRosePNG, liveRosePNG, deathIMG, smallBrokenHeartIMG) {
    push();
    ellipse(300, 300, 300)
    pop();

    textFont(ibmFONT);
    this.fade = new Fade(0, 1, false, true, 255, 255, 255);

    this.finalTime = timePassed;

    this.grade = 'ABCDE'.split('');


    const random = Math.floor(Math.random() * this.grade.length);
    // console.log(random, this.grade[random]);
    this.chosenGrade = this.grade[random];
    console.log(this.chosenGrade);
    introSFX.loop();
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
      this.informationAppear = true;

    // setInterval(() => {
    //   this.informationAppear = true;
    // }, 1000);
    //
    // setInterval(() => {
    //   this.informationAppear = false;
    // }, 2000);
    //
    setTimeout(() => {
      this.fadeStart = true;
    }, 10000);

    setTimeout(() => {
       currentState = new Start(smallHeartIMG, smallDeathIMG);
       introSFX.stop();
    }, 16200);
  }

  update() {
    this.display();
    if (this.fadeStart) {
      this.fade.update();
    }
  };

  display() {
    this.backgroundEnd();
    this.displayInformation();
    // if (frameCount % 85 === 0) {
    //   this.heart.x = random(100, 700);
    //   this.heart.y = random(100, 700);
    //   this.death.x = random(100, 700);
    //   this.death.y = random(100, 700);
    //   this.deadRose.x = random(100, 700);
    //   this.deadRose.y = random(100, 700);
    //   this.liveRose.x = random(100, 700);
    //   this.liveRose.y = random(100, 700);
    // };

    this.displayIcons();

    if (this.informationAppear) {
      this.displayName();


    }
  }

  backgroundEnd() {
    push();
    imageMode(CENTER);
    image(endBoardBG, 400, 400)
    pop();
  }

  displayIcons() {
    push();
    imageMode(CENTER);
    image(this.death.img, this.death.x, this.death.y);
    image(this.deadRose.img, this.deadRose.x, this.deadRose.y)
    image(this.liveRose.img, this.liveRose.x, this.liveRose.y)
    image(this.heart.img, this.heart.x, this.heart.y)
    image(this.heart.img2, this.heart.x2, this.heart.y2)
    pop();
  }

  displayName() {
    push();
    textAlign(LEFT, CENTER);
    textSize(35);
    fill(255);
    text(`Congratulations ` + userName + '!', 70, 230)
    pop();
  }
  displayInformation() {

    push();
    textSize(25);
    fill(255);
    textFont(ibmFONT)
    text('Level 5 : ',70, 300)
    textFont(ibmFONTTypewriter)
    text(`Thriving Griever`, 220, 300);
    pop();

    push();
    textSize(25);
    fill(255);
    textFont(ibmFONT)
    text(`Total Grieving Points : `, 70, 350);
    textFont(ibmFONTTypewriter)
    text(totalPoints + ' pts', 430, 350)
    textFont(ibmFONT)
    text(`Time : `, 70, 400);
    textFont(ibmFONTTypewriter)
    text(this.finalTime, 177, 400)
    pop();

    push();
    fill(0, 0, 0, 0)
    stroke(255)
  //  ellipse(240, 612, 120, 120)
    textSize(100);
    fill(255);
    textFont(ibmFONT)
    text(this.chosenGrade, 70, 550);
    pop();

  }

  mousePressed(){

  }

  mouseDragged(){

  }
  keyTyped(){

  }
  keyPressed(){

  }
  mouseReleased(){

  }
}
