import { keyPressed } from 'kontra';

export default function player_sprite(canvas) {
    return {
        x: canvas.width / 2,
        y: canvas.height * 4 / 5,
        speed: 4,
        anchor: { x: 0, y: 0 },
        fillStyle: 'yellow', // thruster color

        // required for a rectangle sprite
        width: canvas.width / 60,
        height: canvas.width / 40,
        color: 'blue',
        // pass a custom update function to the sprite
        update: function () {
            // move the sprite with the keyboard
            if (keyPressed('up')) {
                // this.playAnimation('walk_up');
                // this.y -= this.speed;
            }
            else if (keyPressed('down')) {
                // this.y += this.speed;
            }

            if (keyPressed('left')) {
                this.advance();
                this.x -= this.speed;
            }
            else if (keyPressed('right')) {
                // this.playAnimation('run');
                this.advance();
                this.x += this.speed;
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