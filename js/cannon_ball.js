const MovingObject = require('./moving_object');

const DEFAULTS = {
  COLOR: 'gray',
  RADIUS: 10,
  SPEED: 15
};

class CannonBall extends MovingObject {
  constructor(options = {}){
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos;
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel;
    super(options);
  }

  collideWith(otherObject){

  }
}

module.exports = CannonBall;
