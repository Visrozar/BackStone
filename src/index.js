import { init, Sprite, SpriteSheet, GameLoop, initKeys, keyPressed, bindKeys } from 'kontra';

// canvas initialization
let { canvas } = init();

// set canvas width as 80% whatever device is being used
canvas.width = window.innerWidth * 4 / 5;
canvas.height = window.innerHeight;

// import BG data
import Bg_sprite from './bg';
import Player_sprite from './player';

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

// create the background
let background_sprite = Sprite(Bg_sprite(canvas));
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
    background_sprite.update();
    player_sprite.update();
    // update(background_sprite, run);
  },
  render: function () {
    background_sprite.render();
    player_sprite.render();
  }
});

loop.start();

initKeys();