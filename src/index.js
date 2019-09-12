import { Sprite, GameLoop, initKeys, bindKeys, keyPressed } from 'kontra';
import initialValues from './initialValues';
import MeteorShower from './meteorShower';
import ZZFX from './ZzFX.min.js';

let canvas = initialValues.canvas;

// gameMenu initialization
document.getElementById('startGame').onclick = startGame;

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
let background_sprite1 = Sprite(Bg_sprite(Star.getStarPositions()));
let background_sprite2 = Sprite(Bg_sprite(Star.getStarPositions()));
let background_sprite3 = Sprite(Bg_sprite(Star.getStarPositions()));
// the second background should start from where the first background ends
background_sprite2.y = 0;
// the third background should start from where the second background ends
background_sprite3.y = canvas.height;

// create the player
let player_sprite = Sprite(Player_sprite());
// clamp sprites movement to the game between x1, y1, and x2, y2
player_sprite.position.clamp(player_sprite.width, 0, canvas.width - player_sprite.width, canvas.height - player_sprite.height);

// initiate obstacle factory
let obstacle_factory = new ObstacleFactory();
//array of active obstacles
let obstacles = [];

//initiate Meteor shower
let meteor_shower = new MeteorShower();

// prevent default key behavior
bindKeys(['left', 'right', 'up', 'down', 'enter', 'space'], function (e) {
  e.preventDefault();
});

let endLoop = GameLoop({
  update: function (dt) {
    player_sprite.update();
  },
  render: function () {
    player_sprite.render();
  }
});

// use kontra.gameLoop to play the animation
let loop = GameLoop({
  update: function (dt) {
    if (keyPressed('enter') || keyPressed('space')) {
      // if game not started yet, start game
      if (!initialValues.gameStart) {
        startGame();
      }
    }
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
        // console.log('collided with ' + obstacle.collider);
        if (obstacle.collider == 'backstone') {
          initialValues.backStones++;
          obstacles.splice(key, 1);
          ZZFX.z(3242, { length: .2 });
        }
        else {
          ZZFX.z(4294, { length: 2, noise: 1 });
          player_sprite.destroy = true;
          loop.stop();
          endLoop.start();
        }
      }
    })

    meteor_shower.commence(player_sprite, loop);

    // probability of spawning new obstacle is 0.03%
    if (initialValues.spawnObstacle) {
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
  }
});

function startGame() {
  document.getElementById('menu').style.display = 'none';
  initialValues.spawnObstacle = true;
  initialValues.gameStart = true;
}

// start the game
loop.start();
initKeys();