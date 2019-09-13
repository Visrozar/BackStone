import { Sprite, GameLoop, initKeys, bindKeys, keyPressed } from 'kontra';
import initialValues from './initialValues';
import MeteorShower from './meteorShower';
import ZZFX from './ZzFX.min.js';
import themes from './obstacleTheme';

let stage = 0;
let canvas = initialValues.canvas;
let player_sprite, obstacle_factory, obstacles, meteor_shower;

// gameMenu initialization
document.getElementById('startGame').onclick = bindGame;

// set canvas width as 80% whatever device is being used
canvas.width = window.innerWidth * 4 / 5;
canvas.height = window.innerHeight;
document.getElementById('menu').style.width = canvas.width + 'px';
// document.getElementById('menu').style.height = canvas.height + 'px';

// import BG data
import Bg_sprite from './bg';
import Player_sprite from './player';
import ObstacleFactory from './obstacleFactory';
import Star from './star';

// Send star positions along with the background
// create the background
let background_sprite1;
let background_sprite2;
let background_sprite3;

// prevent default key behavior
bindKeys(['left', 'right', 'up', 'down'], function (e) {
  e.preventDefault();
});

// if game not started yet, start game
function bindGame(e) {
  if (!initialValues.gameStart) {
    if (stage == 0) {
      next();
      stage = 1;
    } else if (stage == 1) {
      startGame();
      stage = 2;
    } else if (stage == 2) {
      restartGame();
    }
  }
}
bindKeys(['enter', 'space'], bindGame);

let endLoop = GameLoop({
  update: function (dt) {
    player_sprite.update();
    restartScreen();
  },
  render: function () {
    player_sprite.render();
  }
});

// use kontra.gameLoop to play the animation
let loop = GameLoop({
  update: function (dt) {

    background_sprite1.update();
    background_sprite2.update();
    background_sprite3.update();
    // for looping background
    if (background_sprite1.y <= 0 && background_sprite1.y > -4) {
      // once background 1 reaches bottom, start moving background 2 and reposition background 1
      background_sprite3.y = -canvas.height;
    }
    if (background_sprite2.y <= 0 && background_sprite2.y > -4) {
      // once background 2 reaches bottom, start moving background 1 and reposition background 2
      background_sprite1.y = -canvas.height;
    }
    if (background_sprite3.y <= 0 && background_sprite3.y > -4) {
      // once background 3 reaches bottom, start moving background 2 and reposition background 3
      background_sprite2.y = -canvas.height;
    }
    player_sprite.update();
    if (initialValues.gameStart) initialValues.score = initialValues.score + dt;
    document.getElementById('score').innerHTML = parseInt(initialValues.score);
    document.getElementById('backStones').innerHTML = parseInt(initialValues.backStones);

    //update each obstacle
    obstacles.forEach(function (obstacle, key) {
      obstacle.update();
      // check if player collided with obstacle
      if (obstacle.collidesWith(player_sprite)) {
        if (obstacle.collider == 'backstone') {
          initialValues.backStones++;
          obstacles.splice(key, 1);
          ZZFX.z(3242, { length: .2 });
        }
        else {
          ZZFX.z(53966);
          player_sprite.destroy = true;
          loop.stop();
          endLoop.start();
        }
      }
    })

    meteor_shower.commence(player_sprite, loop, endLoop);

    // probability of spawning new obstacle is 0.03%
    if (initialValues.spawnObstacle && !meteor_shower.alive) {
      if (Math.random() <= 0.039) {
        obstacles.push(obstacle_factory.create_obstacle(player_sprite.x, player_sprite.y));
      }
    }
  },
  render: function () {
    background_sprite1.render();
    background_sprite2.render();
    background_sprite3.render();
    player_sprite.render();
    //render all obstacles
    obstacles.forEach(function (obstacle, key) {
      // this object is destroyed
      if (obstacle.y > (initialValues.canvas.height * 2)) {
        obstacles.splice(key, 1);
      }
      obstacle.render();
    });

    //rendor meteor shower
    meteor_shower.render();

    //obstacle screen
    if (stage == 1) {
      asteroid.render();
      star.render();
      planet.render();
      meteor.render();
      backstone.render();
    }
  }
});

function startGame() {
  document.getElementById('menu').style.display = 'none';
  initialValues.spawnObstacle = true;
  initialValues.gameStart = true;
}

function next() {
  document.getElementById('story').style.display = 'none';
  // document.getElementById('obsinfo').style.display = 'block';
  document.getElementById('startGame').innerHTML = '<p>Press "Enter/Spacebar"</p>Click To Begin'
}

function restartScreen() {
  document.getElementById('menu').style.display = 'block';
  document.getElementById('story').style.display = 'none';
  initialValues.highestScore = initialValues.score > initialValues.highestScore ? parseInt(initialValues.score) : parseInt(initialValues.highestScore);
  document.getElementById('highestScore').innerHTML = initialValues.highestScore;
  initialValues.spawnObstacle = false;
  initialValues.gameStart = false;
}

function restartGame() {
  document.getElementById('menu').style.display = 'none';
  initialValues.spawnObstacle = true;
  initialValues.gameStart = true;
  endLoop.stop();
  initializeObjects();
  loop.start();
}

let obstacleWidth = 120;
let numberofObstacles = initialValues.canvas.width > (obstacleWidth * 4) ? 4 : initialValues.canvas.width > (obstacleWidth * 2) ? 2 : 1;

//obstacles on start screen
let asteroid = Sprite({
  x: initialValues.canvas.width * 0.1,
  y: initialValues.canvas.height * 0.35,

  theme: themes.movingThemes.asteroid1,

  render: function () {
    this.context.font = '2em cursive';
    this.context.fillStyle = '#F5DEB3';
    this.context.fillText('Avoid these obstacles', this.x - 40, this.y - 65)
    this.theme();
    this.context.font = '14px cursive';
    this.context.fillStyle = '#F5DEB3';
    this.context.fillText('Asteroids', this.x - 15, this.y + 65)
  }
})

let star = Sprite({
  x: initialValues.canvas.width * 0.4,
  y: (numberofObstacles == 1)? initialValues.canvas.height * 0.55: initialValues.canvas.height * 0.35,
  color: '#64B5F6',

  theme: themes.shooting_star,

  render: function () {
    this.theme();
    this.context.font = '14px cursive';
    this.context.fillStyle = '#F5DEB3';
    this.context.fillText('Shoooting Stars', this.x - 65, this.y + 65)
  }
})

let planet = Sprite({
  x: initialValues.canvas.width * 0.6,
  y: (numberofObstacles == 1)? initialValues.canvas.height * 0.75: (numberofObstacles == 2)? initialValues.canvas.height*0.65:initialValues.canvas.height*0.35,
  color: '#EC407A',
  otherColor: '#E1BEE7',
  width: 75,
  height: 75,

  theme: themes.stationaryThemes.planet1,

  render: function () {
    this.theme();
    this.context.font = '14px cursive';
    this.context.fillStyle = '#F5DEB3';
    this.context.fillText('Planets', this.x - 18, this.y + 65)
  }
})

let meteor = Sprite({
  x: initialValues.canvas.width * 0.8,
  y: (numberofObstacles == 1)? initialValues.canvas.height * 0.75: (numberofObstacles == 2)? initialValues.canvas.height*0.65:initialValues.canvas.height*0.35,

  theme: themes.meteor_shower,

  render: function () {
    this.theme();
    this.context.font = '14px cursive';
    this.context.fillStyle = '#F5DEB3';
    this.context.fillText('Meteors', this.x - 18, this.y + 65)
  }
})

let backstone = Sprite({
  x: initialValues.canvas.width * 0.1,
  y: initialValues.canvas.height * 0.6,
  width: 40,
  height: 40,

  theme: themes.backstone,

  render: function () {
    this.context.font = '2em cursive';
    this.context.fillStyle = '#F5DEB3';
    this.context.fillText('Try to collect as many BackStones as you can', this.x - 40, this.y - 40)
    this.theme();
  }
})
function initializeObjects() {
  // Send star positions along with the background
  // create the background
  background_sprite1 = Sprite(Bg_sprite(Star.getStarPositions()));
  background_sprite2 = Sprite(Bg_sprite(Star.getStarPositions()));
  background_sprite3 = Sprite(Bg_sprite(Star.getStarPositions()));
  // the second background should start from where the first background ends
  background_sprite2.y = 0;
  // the third background should start from where the second background ends
  background_sprite3.y = canvas.height;

  // create the player
  player_sprite = Sprite(new Player_sprite());
  // clamp sprites movement to the game between x1, y1, and x2, y2
  player_sprite.position.clamp(player_sprite.width, 0, canvas.width - player_sprite.width, canvas.height - player_sprite.height);

  // initiate obstacle factory
  obstacle_factory = new ObstacleFactory();
  //array of active obstacles
  obstacles = [];

  //initiate Meteor shower
  meteor_shower = new MeteorShower();

  // reset values that need to be reset
  initialValues.score = 0;
  initialValues.backStones = 3;
}

// start the game
loop.start();
initKeys();
initializeObjects();