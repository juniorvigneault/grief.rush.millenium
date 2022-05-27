class ParticleObject {

  constructor(sX, sY) {

    this.particles = [];

    this.particleConstraints = [];
    this.pBodies = [];

    this.startX = sX;
    this.startY = sY;
    this.centerOffset = 130;
    this.letterOffsetHanging = 200;
    this.offsetPointsHeight = -50;
    this.fallingOffeset = -100;


    this.rectOffsetP = -100;

    this.stiffness = .01;

    this.constraintP;
    this.makeChain();
    // this.makeRound();
  //  this.makeLetterP();
  // this.makeTriangle();
  } //constructor


  display() {
    // for (let i = 0; i < this.particles.length; i++) {
    //   this.particles[i].display();
    //   if (i > 0) {
    //     push();
    //     stroke(255, 0, 0);
    //     if(i ==1){
    //     line(this.particles[i - 1].body.position.x,
    //       this.particles[i - 1].body.position.y,
    //       Matter.Constraint.pointBWorld(this.constraintP).x,
    //       this.particles[i].body.position.y)
    //     }
    //     else{
    //       line(this.particles[i - 1].body.position.x,
    //         this.particles[i - 1].body.position.y,
    //         this.particles[i].body.position.x,
    //         this.particles[i].body.position.y)
    //     }
    //     pop();
    //   }
    // }

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
      // if (i > 0) {
      //   push();
      //   stroke(255, 0, 0);
      //
      //     line(this.particles[i - 1].body.position.x,
      //       this.particles[i - 1].body.position.y,
      //       this.particles[i].body.position.x,
      //       this.particles[i].body.position.y)
      //   pop();
      // }

    }
    // stroke(255, 0, 0);
    // line(this.particles[0].body.position.x,
    //   this.particles[0].body.position.y,
    //   this.particles[this.particles.length-1].body.position.x,
    //   this.particles[this.particles.length-1].body.position.y)

  }



  makeLetterP() {
    // letter p vertical line 1 on the left
    // let mouseParticle = new Particle(mouseX, mouseY, 40, false);

    let p = new Particle(this.centerOffset + 80, this.offsetPointsHeight + 217, 10, true, undefined, undefined, 255, 0, 0, 255, undefined,undefined,undefined);
    let p2 = new Particle(200, this.letterOffsetHanging + 347, 40, false, 0, 0, 0, 0, 0, 0, "P", 0,130);

    let l = new Particle(this.centerOffset + 210, this.offsetPointsHeight + 117, 10, true, undefined, undefined, 255, 0, 0, 255, undefined,undefined,undefined);
    let l2 = new Particle(380, this.letterOffsetHanging + 260, 40, false, 0, 0, 0, 0, 0, 0, "L",31,130);

    let a = new Particle(this.centerOffset + 360, this.offsetPointsHeight + 240, 10, true, undefined, undefined, 255, 0, 0, 255, undefined,undefined,undefined);
    let a2 = new Particle(550, this.letterOffsetHanging + 307, 40, false, 0, 0, 0, 0, 0, 0, "A",0,130);

    let y = new Particle(this.centerOffset + 550, this.offsetPointsHeight + 180, 10, true, undefined, undefined, 255, 0, 0, 255, undefined,undefined,undefined);
    let y2 = new Particle(800, this.letterOffsetHanging + 200, 40, false, 0, 0, 0, 0, 0, 0, "Y",0,130);

    let t = new Particle(this.centerOffset + 710, this.offsetPointsHeight + 200, 10, true, undefined, undefined, 255, 0, 0, 255, undefined,undefined,undefined);
    let t2 = new Particle(900, this.letterOffsetHanging + 400, 40, false, 0, 0, 0, 0, 0, 0, "T",0,130);

    let i = new Particle(this.centerOffset + 870, this.offsetPointsHeight + 110, 10, true, undefined, undefined, 255, 0, 0, 255, undefined,undefined,undefined);
    let i2 = new Particle(950, this.letterOffsetHanging + 300, 40, false, 0, 0, 0, 0, 0, 0, "I",0,130);

    let m = new Particle(this.centerOffset + 1000, this.offsetPointsHeight + 200, 10, true, undefined, undefined, 255, 0, 0, 255, undefined,undefined,undefined);
    let m2 = new Particle(1200, this.letterOffsetHanging + 400, 40, false, 0, 0, 0, 0, 0, 0, "M",0,130);

    let e = new Particle(this.centerOffset + 1200, this.offsetPointsHeight + 170, 10, true, undefined, undefined, 255, 0, 0, 255, undefined,undefined,undefined);
    let e2 = new Particle(1300, this.letterOffsetHanging + 287, 40, false, 0, 0, 0, 0, 0, 0, "E",0,130);

    // let p = new Particle(40, 317, 10, true);
    // let p2 = new Particle(40, 347, 10, false);
    // let p3 = new Particle(40, 377, 10, false);
    // let p4 = new Particle(40, 407, 10, false);
    // let p5 = new Particle(40, 437, 10, false);
    //
    // // round p thingy
    // let p6 = new Particle(70, 317, 10, false);
    // let p7 = new Particle(100, 317, 10, false);
    // let p8 = new Particle(123, 333, 10, false);
    // let p9 = new Particle(123, 360, 10, false);
    // let p10 = new Particle(103, 380, 10, false);
    // let p11 = new Particle(70, 380, 10, false);
    // let p12 = new Particle(123, 335, 10, false);


    this.particles.push(p);
    this.particles.push(p2);

    this.particles.push(l);
    this.particles.push(l2);

    this.particles.push(a);
    this.particles.push(a2);

    this.particles.push(y);
    this.particles.push(y2);

    this.particles.push(t);
    this.particles.push(t2);

    this.particles.push(i);
    this.particles.push(i2);

    this.particles.push(m);
    this.particles.push(m2);

    this.particles.push(e);
    this.particles.push(e2);
    // this.particles.push(p3);
    // this.particles.push(p4);
    // this.particles.push(p5);
    // this.particles.push(p6);
    // this.particles.push(p7);
    // this.particles.push(p8);
    // this.particles.push(p9);
    // this.particles.push(p10);
    // this.particles.push(p11);
    // this.particles.push(p12);
    let optionsP = {
      bodyA: p.body,
      bodyB: p2.body,
      pointB: {
        x: 100,
        y:0,
      },
      pointA: {
        x: 0,
        y: 0
      },

      stiffness: this.stiffness,
    }

    let optionsL = {
      bodyA: l.body,
      bodyB: l2.body,
      pointA: {
        x: 0,
        y: 0
      },

      stiffness: this.stiffness
    }

    let optionsA = {
      bodyA: a.body,
      bodyB: a2.body,
      pointA: {
        x: 0,
        y: 0
      },

      stiffness: this.stiffness
    }

    let optionsY = {
      bodyA: y.body,
      bodyB: y2.body,
      pointA: {
        x: 0,
        y: 0
      },
      stiffness: this.stiffness
    }

    let optionsT = {
      bodyA: t.body,
      bodyB: t2.body,
      pointA: {
        x: 0,
        y: 0
      },

      stiffness: this.stiffness
    }

    let optionsI = {
      bodyA: i.body,
      bodyB: i2.body,
      pointA: {
        x: 0,
        y: 0
      },

      stiffness: this.stiffness
    }

    let optionsM = {
      bodyA: m.body,
      bodyB: m2.body,
      pointA: {
        x: 0,
        y: 0
      },
      stiffness: this.stiffness
    }

    let optionsE = {
      bodyA: e.body,
      bodyB: e2.body,
      pointA: {
        x: 0,
        y: 0
      },
      stiffness: this.stiffness
    }



    //see doc
    this.constraintP = Constraint.create(optionsP);
    console.log(Matter.Constraint.pointBWorld(this.constraintP));
    let constraintL = Constraint.create(optionsL);
    let constraintA = Constraint.create(optionsA);
    let constraintY = Constraint.create(optionsY);

    let constraintT = Constraint.create(optionsT);
    let constraintI = Constraint.create(optionsI);
    let constraintM = Constraint.create(optionsM);
    let constraintE = Constraint.create(optionsE);


    //  this.particleConstraints.push(constraint);
    World.add(world, this.constraintP)
    World.add(world, constraintL)
    World.add(world, constraintA)
    World.add(world, constraintY)
    World.add(world, constraintT)
    World.add(world, constraintI)
    World.add(world, constraintM)
    World.add(world, constraintE)





  }

  pLetter() {

  }


  makeRound() {
    let radius = 40;
    let theta = 0;

    let fixed = false;
    let prev = null;

    while (theta <= 2 * PI + .2) {
      //  console.log(theta)
      let x = this.startX + (sin(theta) * radius);
      let y = this.startY + (cos(theta) * radius);

      let p = new Particle(x, y, 10, 10, false);
      this.particles.push(p);
      //this.pBodies.push(p.body);
      if (prev !== null) {
        let options = {
          bodyA: prev.body,
          bodyB: p.body,
          pointA: {
            x: 0,
            y: 0
          },
          stiffness: 0.2

        }
        //see doc
        let constraint = Constraint.create(options);
        //  this.particleConstraints.push(constraint);
        World.add(world, constraint)
      }
      prev = p;





      theta += 0.13;
    }
    //make last

    //let lx = this.startX+ (sin(theta) * radius);
    //let ly = this.startY+ (cos(theta)*radius);

    //let last = new Particle(lx,ly,5,5,false);
    //this.particles.push(last);
    let options = {
      bodyA: this.particles[this.particles.length - 1].body,
      bodyB: this.particles[0].body,
      pointA: {
        x: 0,
        y: 0
      },
      length: .2,
      stiffness: .4

    }
    //see doc
    let constraint = Constraint.create(options);
    //  this.particleConstraints.push(constraint);
    World.add(world, constraint)


  }

  collision(x, y) {
  //  for (let i = 0; i < this.particles.length; i++) {
      let pos = this.particles[0].body.position;
      let d = dist(pos.x, pos.y, x, y)
      return (d < 30)
    //}
  }

  groundCollision(g){
    let pos = this.particles[0].body.position;
    if(pos.x > g.body.position.x && pos.x < g.body.position.x + g.w/2
      && (pos.y -30 ) > g.body.position.y && (pos.y-30) < g.body.position.y + g.h/2){
        return true;
      }
      return false;
  }

//   makeTriangle(){
//     let p = new Particle(300,300, 10, true);
//     let q = new Particle(500,300,10, false);
//     let r = new Particle(400,200,10, false);
//     this.particles.push(p);
//     this.particles.push(q);
//     this.particles.push(r);
//
//     for(let i=1; i<this.particles.length;i++){
//
//       let options = {
//         bodyA: this.particles[i-1].body,
//         bodyB: this.particles[i].body,
//         pointA: {
//           x: 0,
//           y: 0
//         },
//         stiffness: 0.2
//
//       }
//       //see doc
//       let constraint = Constraint.create(options);
//       //  this.particleConstraints.push(constraint);
//       World.add(world, constraint)
//
//     }
// //last
//     let options = {
//       bodyA: this.particles[this.particles.length-1].body,
//       bodyB: this.particles[0].body,
//       pointA: {
//         x: 0,
//         y: 0
//       },
//       stiffness: 1
//
//     }
//     //see doc
//     let constraint = Constraint.create(options);
//     //  this.particleConstraints.push(constraint);
//     World.add(world, constraint)
//
//
//   }

  makeChain(){

    let fixed=false;
    let prev=null;

    for(let x =this.startX;x<this.startX+150; x+=2){

    if(prev ===null){
      fixed =true;
      }
    else{
      fixed=false;
    }

    let p = new Particle(x,this.startY,28,5,fixed);
    this.particles.push(p);
    if(prev!==null){
        let options = {
          bodyA:prev.body,
          bodyB:p.body,
          pointA: {
            x:0,
            y:0
          },
          length:40,
          stiffness:0

        }
        //see doc
      let constraint = Constraint.create(options);
      World.add(world,constraint)
    }
    prev = p;

  }//for
  }
} //class
