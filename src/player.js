import { keyPressed } from 'kontra';

export default function player_sprite(canvas) {
    return {
        x: canvas.width/2,
        y: canvas.height * 4/5,
        speed: 0.5,
        anchor: { x: 0, y: 0 },

        // required for a rectangle sprite
        width: 10,
        height: 20,
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
    }
}