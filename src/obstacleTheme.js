import initialValues from './initialValues'

export default {

  'movingThemes': {

    'asteroid1': function() {
      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      this.context.beginPath();
      this.context.fillStyle = 'darkgrey';
      this.context.lineTo(-24, -11);
      this.context.lineTo(-8, -31);
      this.context.lineTo(14, -25);
      this.context.lineTo(36, 3);
      this.context.lineTo(14, 23);
      this.context.lineTo(-8, 17);
      this.context.lineTo(-30, 3);
      this.context.fill();

      this.context.beginPath();
      this.context.strokeStyle = 'grey';
      this.context.lineCap = 'butt';
      this.context.lineWidth = 3;
      this.context.arc(-2, -12, 5, 0, 1.8*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(0, 8, 3, 0, 1.5*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(22, 5, 2, 0, Math.PI);
      this.context.stroke();

      this.context.restore();
    },

    'asteroid2': function() {
      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      this.context.lineWidth = 0;

      this.context.beginPath();
      this.context.fillStyle = 'darkgrey';
      this.context.moveTo(-25, -10);
      this.context.lineTo(-13, -32);
      this.context.lineTo(19, -32);
      this.context.lineTo(41, -10);
      this.context.lineTo(30, 20);
      this.context.lineTo(19, 23);
      this.context.lineTo(-9, 38);
      this.context.arc(-26, 30, 8,0.5*Math.PI, 0.7*Math.PI);
      this.context.lineTo(-43, 6);
      this.context.arc(-13, -32, 4, 0, Math.PI)
      //this.context.lineTo(0, 0);
      this.context.fill();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(-9, 5, 5, 0, 1.8*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(-19, 15, 6, 0, 1.5*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.fillStyle = 'grey';
      this.context.arc(17, 15, 10, 0, 1.5*Math.PI);
      this.context.fill();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(27, -8, 2, 0, Math.PI);
      this.context.stroke();

      this.context.lineWidth = 1;

      this.context.restore();

    },

    'asteroid3': function() {
      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      this.context.beginPath();
      this.context.fillStyle = 'darkgrey';
      this.context.moveTo(-40, 5);
      this.context.lineTo(-34, -11);
      this.context.lineTo(-38, -13);
      this.context.lineTo(-8, -22);
      this.context.lineTo(20, -19);
      this.context.lineTo(34, -24);
      this.context.lineTo(39, -22);
      this.context.lineTo(42, 5);
      this.context.lineTo(36, 27);
      this.context.lineTo(6, 21);
      this.context.lineTo(-16, 21);
      this.context.arc(-16, 5, 14, 0,0.7*Math.PI);
      this.context.lineTo(-38, 21);
      this.context.lineTo(-34, 19);
      this.context.lineTo(-40, 5);
      this.context.fill();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(-22, 7, 6, 0.3*Math.PI, 1.4*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.fillStyle = 'grey';
      this.context.arc(8, 1, 6, 0.2*Math.PI, 1.7*Math.PI);
      this.context.fill();

      this.context.beginPath();
      this.context.fillStyle = 'grey';
      this.context.arc(-4, -9, 6, 0.7*Math.PI, 2*Math.PI);
      this.context.fill();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(32, 15, 6, Math.PI, 1.75*Math.PI);
      this.context.stroke();

      this.context.restore();

    }
  },

  'shooting_star': function() {

    this.context.save();
    this.context.translate(this.viewX,this.viewY);
    this.context.rotate(this.rotation);

    this.context.lineWidth = 0;

    gradientStyle = this.context.createLinearGradient(0, 0, 200, 0);
    gradientStyle.addColorStop(0, this.color);
    gradientStyle.addColorStop(1, "white");

    this.context.beginPath();
    this.context.fillStyle = gradientStyle;
    this.context.moveTo(-120,0);
    this.context.lineTo(6,18);
    this.context.lineTo(6,-18);
    this.context.fill();

    var gradientStyle = this.context.createRadialGradient(0, 0, 10, 0, 0, 40);
    gradientStyle.addColorStop(0, this.color);
    gradientStyle.addColorStop(1, "white");

    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.fillStyle = gradientStyle;
    this.context.arc(0,0,18,0,2*Math.PI);
    this.context.fill();

    this.context.lineWidth = 1;

    this.context.restore();
  },

  'stationaryThemes': {

    'planet1': function(){

      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      var gradientStyle = this.context.createRadialGradient(10, 0, 15, 0, 0, 100);
      gradientStyle.addColorStop(0, this.otherColor);
      gradientStyle.addColorStop(1, this.color);

      this.context.beginPath();
      this.context.fillStyle = gradientStyle;
      this.context.arc(0,0,0.6*this.width,0,2*Math.PI);
      this.context.fill();
      this.context.restore();
    },

    'planet2': function(){

        this.context.save();
        this.context.translate(this.viewX,this.viewY);
        this.context.rotate(this.rotation);

        var gradientStyle = this.context.createRadialGradient(10, 0, 15, 0, 0, 100);
        gradientStyle.addColorStop(0, this.otherColor);
        gradientStyle.addColorStop(1, this.color);

        this.context.beginPath();
        this.context.fillStyle = gradientStyle;
        this.context.arc(0,0,0.6*this.width,0,2*Math.PI);
        this.context.fill();

        let ring = new Path2D();
        ring.moveTo(-this.width+5,-10);
        ring.bezierCurveTo(-0.6*this.width*3.5,25,0.6*this.width*3.5,25,0.6*this.width-5,-10);
        ring.moveTo(0.7*this.width-5,-10);
        ring.bezierCurveTo(0.6*this.width*2.3,15,-0.6*this.width*2.3,15,-0.6*this.width+5,-10);
        ring.closePath();
        this.context.fill(ring);

        this.context.restore();

    }

  },

  'backstone': function() {
    this.context.save();
    this.context.translate(this.viewX,this.viewY);

    let backStoneGradient = this.context.createLinearGradient(-12,0,12,0);
    backStoneGradient.addColorStop(0,'#D1C4E9');
    backStoneGradient.addColorStop(0.5,'#7E57C2');
    backStoneGradient.addColorStop(1,'#3949AB');

    this.context.lineWidth = 0;

    this.context.beginPath();
    this.context.moveTo(-12,-3);
    this.context.quadraticCurveTo(-1,-7,0,-12);
    this.context.lineTo(12,-3);
    this.context.lineTo(0,12);
    this.context.lineTo(-12,-3);
    this.context.fillStyle = backStoneGradient;
    this.context.shadowColor = 'white';
    this.context.shadowBlur = initialValues.stoneShadow[Math.floor(Math.random()*initialValues.stoneShadow.length)];
    this.context.fill();

    this.context.lineWidth = 1;

    this.context.restore();

  },

  'meteor_shower': function() {
    this.context.save();
    this.context.translate(this.viewX,this.viewY);

    this.context.beginPath();
    this.context.arc(0,0,47,0.3*Math.PI,0.7*Math.PI);
    this.context.bezierCurveTo(-45,15,-30,0,-(Math.random()*(34-26)+26),-15);
    this.context.lineTo(-20,5);
    this.context.lineTo(-(Math.random()*(29-21)+21),-35);
    this.context.lineTo(-10,-15);
    this.context.lineTo(0,-40);
    this.context.lineTo(10,-15);
    this.context.lineTo(Math.random()*(29-21)+21,-35);
    this.context.lineTo(20,5);
    var rightx = Math.random()*(34-26)+26;
    this.context.lineTo(rightx,-15);
    this.context.bezierCurveTo(rightx,0,45,15,25,41);
    this.context.fillStyle = '#FFD54F';
    this.context.fill();

    this.context.lineCap = "butt";
    this.context.lineWidth = 1;

    this.context.beginPath();
    this.context.arc(0,25,18,0,2*Math.PI);
    this.context.fillStyle = '#A1887F';
    this.context.fill();

    this.context.beginPath();
    this.context.arc(-10,25,3,0,1.2*Math.PI);
    this.context.strokeStyle = '#5D4037';
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(10,30,4,0,0.8*Math.PI);
    this.context.strokeStyle = '#5D4037';
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(5,18,3,0,1.8*Math.PI);
    this.context.strokeStyle = '#5D4037';
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(0,21,22,1.7*Math.PI,1.3*Math.PI);
    this.context.quadraticCurveTo(-5,5,0,-15);
    this.context.quadraticCurveTo(5,3,13,3);
    this.context.fillStyle = 'rgba(255,138,101,0.5)';
    this.context.fill();

    this.context.restore();
  }

}
