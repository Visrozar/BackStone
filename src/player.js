import { Sprite, keyPressed } from 'kontra';
import Rewind from './rewind';
import initialValues from './initialValues';

let canvas = initialValues.canvas;

export default function player_sprite() {

    let displayGameOver = function () {
        this.context.lineCap = "round";
        this.context.lineJoin = "round";
        this.context.lineWidth = 15;
        let gradient = this.context.createLinearGradient(0, 0, initialValues.canvas.width, 0);
        gradient.addColorStop("0", " magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        // Fill with gradient
        this.context.strokeStyle = gradient;
        this.context.fillStyle = gradient;
        this.context.font = initialValues.canvas.width / 40 + "px Verdana";
        let width = initialValues.canvas.width * 0.5;
        let height = initialValues.canvas.height * 0.15;
        this.context.fillText("GAME OVER!", initialValues.canvas.width / 2 - width / 2 + 50, initialValues.canvas.height / 2 + 5);
        this.context.rect(initialValues.canvas.width / 2 - width / 2, initialValues.canvas.height / 2 - height / 2, width, height);
        this.context.stroke();
    }
    return {
        x: canvas.width / 2,
        y: canvas.height * 4 / 5,
        speed: 6,
        anchor: { x: 0.5, y: 0.5 },
        fillStyle: 'yellow', // thruster color

        // required for a rectangle sprite
        width: canvas.width / 60,
        height: canvas.width / 40,
        color: 'blue',
        destroy: false,

        // game over text
        gameOver: Sprite({
            width: 200,
            height: 100,

            x: initialValues.canvas.width / 2 - 100,
            y: initialValues.canvas.width / 2 - 500,

            dx: 0,
            dy: initialValues.backgroundSpeed,

            render: displayGameOver

        }),

        // required for moving back in time
        rewind: new Rewind,

        // pass a custom update function to the sprite
        update: function () {
            if (initialValues.rewindMode) {
                let rewind = this.rewind.back();
                this.x -= rewind.x;
                this.y -= rewind.y;
            } else {
                // if (keyPressed('down') && initialValues.backStones >= 0) {
                //     // backstone used
                // }
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
        draw: function () {
            this.context.save();
            this.context.translate(this.x,this.y);

            this.context.beginPath();
            this.context.lineJoin = 'round';
            this.context.moveTo(this.width/2, -0.2*this.height);
            this.context.lineTo(-this.width/2, -0.2*this.height);
            this.context.lineTo(0, -0.5 * this.height);
            this.context.lineTo(this.width/2, -0.2*this.height);
            this.context.fillStyle = '#455A64';
            this.context.fill();

            this.context.beginPath();
            this.context.moveTo(this.width/2, -0.2*this.height);
            this.context.quadraticCurveTo(this.width/2 + 0.1*this.width, 0, this.width/2, 0.45*this.height);
            this.context.lineTo(-this.width/2, 0.45*this.height);
            this.context.quadraticCurveTo(-this.width/2 - 0.1*this.width, 0, -this.width/2,-0.2*this.height);
            this.context.fillStyle = '#EEEEEE';
            this.context.fill();

            this.context.beginPath();
            this.context.arc(0, -0.00625*this.height, 0.15*this.height, 0, 2 * Math.PI);
            this.context.fillStyle = '#455A64';
            this.context.fill();

            this.context.beginPath();
            this.context.arc(0, -0.00625*this.height, 0.1*this.height, 0, 2 * Math.PI);
            this.context.fillStyle = '#80DEEA';
            this.context.fill();

            this.context.beginPath();
            this.context.moveTo(1.15*this.width/2, 0.32*this.height);
            this.context.lineTo(-1.15*this.width/2, 0.32*this.height);
            this.context.lineWidth = 0.07*this.height;
            this.context.strokeStyle = '#455A64';
            this.context.stroke();

            this.context.beginPath();
            this.context.moveTo(1.1*this.width/2, 0.2*this.height);
            this.context.lineTo(1.5*this.width/2, 0.42*this.height);
            this.context.lineTo(1.5*this.width/2, 0.72*this.height);
            this.context.lineTo(1.3*this.width/2, 0.47*this.height);
            this.context.lineTo(1.1*this.width/2, 0.4*this.height);
            this.context.fillStyle = '#ef5350';
            this.context.fill();

            this.context.beginPath();
            this.context.moveTo(-1.1*this.width/2, 0.2*this.height);
            this.context.lineTo(-1.5*this.width/2, 0.42*this.height);
            this.context.lineTo(-1.5*this.width/2, 0.72*this.height);
            this.context.lineTo(-1.3*this.width/2, 0.47*this.height);
            this.context.lineTo(-1.1*this.width/2, 0.4*this.height);
            this.context.fillStyle = '#ef5350';
            this.context.fill();

            var rys = [0.6*this.height, 0.7*this.height, 0.7*this.height, 0.75*this.height]
            var ry = rys[Math.floor(Math.random() * rys.length)]

            this.context.beginPath();
            this.context.moveTo(-0.7*this.width/2, 0.45*this.height);
            this.context.quadraticCurveTo(-0.65*this.width/2, 0.6*this.height, 0, ry);
            this.context.quadraticCurveTo(0.65*this.width/2, 0.6*this.height, 0.7*this.width/2, 0.45*this.height);
            this.context.fillStyle = '#F57C00';
            this.context.fill();

            this.context.beginPath();
            this.context.moveTo(-0.6*this.width/2, 0.45*this.height);
            this.context.quadraticCurveTo(-0.55*this.width/2, 0.55*this.height, 0, 0.9*ry);
            this.context.quadraticCurveTo(0.55*this.width/2, 0.55*this.height, 0.6*this.width/2, 0.45*this.height);
            this.context.fillStyle = '#FFF176';
            this.context.fill();

            this.context.restore();
        },
        render: function () {
            // if (this.destroy) {
            //     // draw thruster behind the ship
            //     this.fillStyle = this.fillStyle == 'yellow' ? 'red' : 'yellow';
            //     this.context.fillStyle = this.fillStyle;
            //     this.context.beginPath();
            //     this.context.arc(this.x + this.width / 2, this.y + this.height, Math.random() * 6, 0, 2 * Math.PI);
            //     this.context.fill();

            //     this.gameOver.render();
            // } 

            // draw the ship
            this.draw();


        }
    }
}