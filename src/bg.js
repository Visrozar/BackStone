import { keyPressed } from 'kontra';

export default function bg_sprite(canvas) {
    return {
        x: 0,
        y: 0,
        // speed: 0.5,
        anchor: { x: 0, y: 0 },

        // required for a rectangle sprite
        width: canvas.width,
        height: canvas.height,
        color: 'grey',
        // pass a custom update function to the sprite
        update: function () {
            this.advance();
            
        },
        render: function () {
            this.draw();

            // draw stars
            this.context.fillStyle = 'yellow';
            this.context.beginPath();
            this.context.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            this.context.arc(this.x + 10, this.y + 10, 3, 0, 2 * Math.PI);
            this.context.fill();
        }
    }
}