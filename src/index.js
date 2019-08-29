import { init, Pool, Sprite, SpriteSheet, GameLoop, initKeys, keyPressed, bindKeys } from 'kontra';

// canvas initialization
let { canvas } = init();

// set canvas width as 80% whatever device is being used
canvas.width = window.innerWidth * 4 / 5;
canvas.height = window.innerHeight;

// import BG data
import Bg_sprite from './bg';
import Player_sprite from './player';
import Star from './star';
// import Thruster from './thruster';

// let run = new Image();
// run.src = './images/run.png';

// use spriteSheet to create animations from an image
// let rightRunSpriteSheet = SpriteSheet({
//   image: run,
//   frameWidth: 12,
//   frameHeight: 16,
//   animations: {
//     // create a named animation: run
//     run: {
//       frames: '0..3',  // frames 0 through 3
//       frameRate: 20
//     },
//     idle: {
//       frames: 0,
//       loop: false
//     }
//   }
// });

// let background_sprite = Sprite({
//   x: 100,
//   y: 120,
//   speed: 0.5,
//   // dx: 0.5,
//   // dy: 0.5,
//   anchor: { x: 0.5, y: 0.5 },

//   // required for an animation sprite
//   animations: rightRunSpriteSheet.animations,
//   // pass a custom update function to the sprite
//   update: function () {
//     // move the sprite with the keyboard
//     if (keyPressed('up')) {
//       // this.playAnimation('walk_up');
//       this.y -= this.speed;
//     }
//     else if (keyPressed('down')) {
//       this.y += this.speed;
//     }

//     if (keyPressed('left')) {
//       // run.style.transform = "scaleX(-1)";
//       // this.x -= this.dx;
//       // this.context.scale(-1,1);
//       this.playAnimation('run');
//       this.advance();
//       this.x -= this.speed;
//     }
//     else if (keyPressed('right')) {
//       this.playAnimation('run');
//       this.advance();
//       this.x += this.speed;
//     }
//     else {
//       this.playAnimation('idle');
//       this.advance();
//     }
//   }
// });
// };

// Send star positions along with the background
// create the background
let background_sprite1 = Sprite(Bg_sprite(canvas, Star.getStarPositions()));
let background_sprite2 = Sprite(Bg_sprite(canvas, Star.getStarPositions()));
// the second background should start from where the first background ends
background_sprite2.y = 0;
// create the player
let player_sprite = Sprite(Player_sprite(canvas));


// prevent default key behavior
bindKeys(['up', 'down', 'left', 'right'], function (e) {
  e.preventDefault();
});

// clamp sprites movement to the game between x1, y1, and x2, y2
// background_sprite.position.clamp(0, 0, canvas.width - background_sprite.width, canvas.height - background_sprite.height);

// use kontra.gameLoop to play the animation
let loop = GameLoop({
  update: function (dt) {
    background_sprite1.update();
    background_sprite2.update();
    // for looping background
    if (background_sprite1.y == 0) {
      // once background 1 reaches bottom, start moving background 2 and reposition background 1
      background_sprite2.y = -canvas.height;
    }
    if (background_sprite2.y == 0) {
      // once background 2 reaches bottom, start moving background 1 and reposition background 2
      background_sprite1.y = -canvas.height;
    }
    player_sprite.update();
  },
  render: function () {
    background_sprite1.render();
    background_sprite2.render();
    player_sprite.render();
  }
});

loop.start();

initKeys();