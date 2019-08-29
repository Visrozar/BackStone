export default function bg_sprite(canvas, stars) {
    return {
        x: 0,
        y: -canvas.height,
        dx: 0,
        // move it vertically down
        dy: 1,
        // speed: 0.5,
        anchor: { x: 0, y: 0 },

        // required for a rectangle sprite
        width: canvas.width,
        height: canvas.height,
        color: 'black',
        // pass a custom update function to the sprite
        update: function () {
            this.advance();
            // change the velocity at the edges of the canvas
            // if (this.x < 0 ||
            //     this.x + this.width > this.context.canvas.width) {
            //     this.dx = -this.dx;
            // }
            // if (this.y >= 0) {
            //     this.dy = -this.dy;
            // }
        },
        render: function () {
            this.draw();

            // draw stars
            this.context.fillStyle = 'white';
            for (let index = 0; index < stars.length; index++) {
                this.context.beginPath();
                this.context.arc(stars[index].x * canvas.width + this.x, stars[index].y * canvas.width + this.y, stars[index].size * canvas.width/500, 0, 2 * Math.PI);
                this.context.fill();
            }
        }
    }
}