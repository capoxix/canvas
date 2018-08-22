const MovingObject = require('./moving_object');

class Enemy extends MovingObject{
  constructor(options){
    options.radius = Enemy.RADIUS;
    options.vel = [-1, 0];
    options.color = 'brown';
    // .game = options.game;
    // this.pos = options.pos;
    super(options);
    this.enemyAnimation = [[8,510, 31, 74],[48,510, 47,74], [104,511,39,73],
    [152,511, 29, 73], [192,510, 40, 74], [240,510,32,74]];
    this.animationCount = 0;
    this.animationDelay = 0;
  }

  updateFrame(){

  }

  draw(ctx){
    let enemyImg = document.getElementById('enemy');
    // if (this.animationDelay >= 5) debugger;
    // let c = ctx;
    // let that = this;
    // setInterval(function(){
    //   that.animationDelay += 1;
    //   if (that.animationDelay++ >= 1){
    //     that.animationDelay = 0;
    //     that.animationCount++;
    //
    //     if (that.animationCount >= that.enemyAnimation.length){
    //       that.animationCount = 0;
    //       // console.log(this.animationCurrentFrame);
    //       // debugger;
    //       that.enemyAnimation[that.animationCount];
    //     }
    //     // ctx.globalAlpha = 2;
    //     // ctx.clearRect(this.pos[0], this.pos[1]-50, 30, 75);
    //     c.drawImage(enemyImg,  that.enemyAnimation[that.animationCount][0], that.enemyAnimation[that.animationCount][1],
    //         that.enemyAnimation[that.animationCount][2],
    //         that.enemyAnimation[that.animationCount][3], that.pos[0],that.pos[1]-50, 30,75);
    //   }
    // }, 1000);

    this.animationDelay += 1;
    if (this.animationDelay++ >= 1){
      this.animationDelay = 0;
      this.animationCount++;

      if (this.animationCount >= this.enemyAnimation.length){
        this.animationCount = 0;
        // console.log(this.animationCurrentFrame);
        // debugger;
        this.enemyAnimation[this.animationCount];
      }
      // ctx.globalAlpha = 2;
      // ctx.clearRect(this.pos[0], this.pos[1]-50, 30, 75);
      ctx.drawImage(enemyImg,  this.enemyAnimation[this.animationCount][0],   this.enemyAnimation[this.animationCount][1],
          this.enemyAnimation[this.animationCount][2],
          this.enemyAnimation[this.animationCount][3], this.pos[0],this.pos[1]-50, 30,75);
    }



      // ctx.clearRect(this.pos[0], this.pos[1]-50, 30,75);
      // updateFrame()
      // ctx.drawImage(enemyImg,sprite[0], sprite[1], sprite[2], sprite[3], this.pos[0],this.pos[1]-50, 30,75);
      // ctx.restore();

    // ctx.fillStyle = this.color;
    // ctx.beginPath();
    // ctx.arc(
    //   this.pos[0], this.pos[1], this.radius, 0 , 2 * Math.PI, true
    // );
    //
    // ctx.fill();

  }

  move(timeDelta) {
  // timeDelta is number of milliseconds since last move
  // if the computer is busy the time delta will be larger
  // in this case the MovingObject should move farther in this frame
  // velocity of object is how far it should move in 1/60th of a second
  const velocityScale = timeDelta /30,//NORMAL_FRAME_TIME_DELTA,
      offsetX = this.vel[0] * velocityScale,
      offsetY = this.vel[1] * velocityScale;
      // console.log("moving enemy");

  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
  // console.log(this.pos[0]);
  if (this.pos[0] < 200) {
    // console.log("YOU LOSE ENEMY REACHED YOU!");
    // window.clearInterval(this.game.enemiesCreation);
    // this.game.enemies = [];
    this.game.endGame();
  }
  if (this.game.isOutOfBounds(this.pos)) {
    // console.log("removing cannonball");
    // debugger
    this.remove();
    // }
  }
}
}

Enemy.RADIUS = 20;


module.exports = Enemy;
