import { Sprite, GameLoop, initKeys, bindKeys } from 'kontra';
import initialValues from './initialValues';

let backStones = initialValues.backStones;
let score = initialValues.score;
let canvas = initialValues.canvas;

// gameMenu initialization
document.getElementById('startGame').onclick = function startGame() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('myCanvas').style.display = 'block';
  document.getElementById('scoreBoard').style.display = 'block';
  document.getElementById('backStoneBoard').style.display = 'block';

  // start the game
  loop.start();
  initKeys();
}

// set canvas width as 80% whatever device is being used
canvas.width = window.innerWidth * 4 / 5;
canvas.height = window.innerHeight;

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
player_sprite.position.clamp(0, 0, canvas.width - player_sprite.width, canvas.height - player_sprite.height);

// initiate obstacle factory
let obstacle_factory = new ObstacleFactory(canvas.width, canvas.height);
// create obstacle
let obstacle = obstacle_factory.create_obstacle(player_sprite.x, player_sprite.y);

// prevent default key behavior
bindKeys(['left', 'right', 'up', 'down'], function (e) {
  e.preventDefault();
});

// use kontra.gameLoop to play the animation
let loop = GameLoop({

  update: function (dt) {
    background_sprite1.update();
    background_sprite2.update();
    background_sprite3.update();
    // for looping background
    if (background_sprite1.y == 0) {
      // once background 1 reaches bottom, start moving background 2 and reposition background 1
      background_sprite3.y = -canvas.height;
    }
    if (background_sprite2.y == 0) {
      // once background 2 reaches bottom, start moving background 1 and reposition background 2
      background_sprite1.y = -canvas.height;
    }
    if (background_sprite3.y == 0) {
      // once background 2 reaches bottom, start moving background 1 and reposition background 2
      background_sprite2.y = -canvas.height;
    }
    player_sprite.update();
    obstacle.update();
    score = score + dt;
    document.getElementById('score').innerHTML = parseInt(score);
    document.getElementById('backStones').innerHTML = parseInt(backStones + 1);
  },
  render: function () {
    background_sprite1.render();
    background_sprite2.render();
    background_sprite3.render();
    player_sprite.render();
    obstacle.render();
  }
});

bindKeys(['down'], function (e) {
  // backstone used
  if (backStones >= 0) backStones--;
});