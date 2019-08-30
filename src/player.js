import { keyPressed } from 'kontra';
import Rewind from './rewind';
import backStones from './backstone';

export default function player_sprite(canvas) {
    return {
        x: canvas.width / 2,
        y: canvas.height * 4 / 5,
        speed: 6,
        anchor: { x: 0, y: 0 },
        fillStyle: 'yellow', // thruster color

        // required for a rectangle sprite
        width: canvas.width / 60,
        height: canvas.width / 40,
        color: 'blue',

        // required for moving back in time
        rewind: new Rewind,
        backstone_mode: false,

        // pass a custom update function to the sprite
        update: function () {
            if (this.backstone_mode) {
                if (this.rewind.doneRewind()) this.backstone_mode = false;
                else {
                    let rewind = this.rewind.back();
                    this.x -= rewind.x;
                    this.y -= rewind.y;
                }
            } else {
                if (keyPressed('down') && backStones.value >= 0) {
                    // backstone used
                    this.backstone_mode = true;
                }
                if (keyPressed('left')) {
                    this.advance();
                    this.x -= this.speed;
                    this.rewind.add(-this.speed, 0);
                }
                else if (keyPressed('right')) {
                    this.advance();
                    this.x += this.speed;
                    this.rewind.add(this.speed, 0);
                }
                else {
                    this.rewind.add(0, 0);
                }
            }
        },
        render: function () {
            // draw thruster behind the ship
            this.fillStyle = this.fillStyle == 'yellow' ? 'red' : 'yellow';
            this.context.fillStyle = this.fillStyle;
            this.context.beginPath();
            this.context.arc(this.x + this.width / 2, this.y + this.height, Math.random() * 6, 0, 2 * Math.PI);
            this.context.fill();

            // draw the ship
            this.draw();

            // draw the conical top of the ship
            this.context.beginPath();
            this.context.moveTo(this.x, this.y);
            this.context.lineTo(this.x + this.width / 2, this.y - 5);
            this.context.lineTo(this.x + this.width, this.y);
            this.context.lineTo(this.x, this.y);
            this.context.fillStyle = this.color;
            this.context.fill();

            // draw the window
            this.context.fillStyle = 'white';
            this.context.beginPath();
            this.context.arc(this.x + this.width / 2, this.y + this.height / 3, 2, 0, 2 * Math.PI);
            this.context.fill();
        }
    }
}