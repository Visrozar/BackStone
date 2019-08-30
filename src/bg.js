import { keyPressed } from 'kontra';
import Rewind from './rewind';

export default function bg_sprite(canvas, stars) {
    return {
        x: 0,
        y: -canvas.height,
        dx: 0,
        // move it vertically down
        dy: 4,
        // speed: 0.5,
        anchor: { x: 0, y: 0 },

        // required for a rectangle sprite
        width: canvas.width,
        height: canvas.height,
        color: 'black',

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
                if (keyPressed('down')) {
                    // backstone used
                    this.backstone_mode = true;
                }
                this.advance();
                this.rewind.add(0, this.dy);
            }
        },
        render: function () {
            this.draw();

            // draw back
            if (this.backstone_mode) {
                let ctx = this.context;
                let rewind_length = this.rewind.rewind.length;
                ctx.beginPath();
                ctx.font = canvas.width / 12 + "px Verdana";
                // Create gradient
                let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                gradient.addColorStop("0", " magenta");
                gradient.addColorStop("0.5", "blue");
                gradient.addColorStop("1.0", "red");
                // Fill with gradient
                ctx.fillStyle = gradient;
                ctx.fillText("BACK!", canvas.width / 2.7, canvas.height / 2);

                var drawCircle = function (color, lineWidth, percent) {
                    let radius = canvas.width / 5;
                    percent = Math.min(Math.max(0, percent || 1), 1);
                    ctx.beginPath();
                    ctx.arc(canvas.width / 2, canvas.height / 2.10, radius, 0, Math.PI * 2 * percent, false);
                    ctx.strokeStyle = color;
                    ctx.lineCap = 'round'; // butt, round or square
                    ctx.lineWidth = lineWidth;
                    ctx.stroke();
                };

                var drawNewGraph = function () {
                    drawCircle('white', 15, 100 / 100);
                    drawCircle(gradient, 15, rewind_length / 100);
                };
                drawNewGraph();
            }

            // draw stars
            for (let index = 0; index < stars.length; index++) {
                this.context.beginPath();
                this.context.fillStyle = 'white';
                this.context.arc(stars[index].x * canvas.width + this.x, stars[index].y * canvas.width + this.y, stars[index].size * canvas.width / 500, 0, 2 * Math.PI);
                this.context.fill();
            }
        }
    }
}