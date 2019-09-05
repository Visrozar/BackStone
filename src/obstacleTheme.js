import initialValues from './initialValues'

export default {

  'movingThemes': {

    'asteroid1': function() {
      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      this.context.beginPath();
      this.context.fillStyle = 'darkgrey';
      this.context.moveTo(0, 0);
      this.context.lineTo(6, -14);
      this.context.lineTo(22, -34);
      this.context.lineTo(44, -28);
      this.context.lineTo(66, 0);
      this.context.lineTo(44, 20);
      this.context.lineTo(22, 14);
      this.context.lineTo(0, 0);
      this.context.fill();

      this.context.beginPath();
      this.context.strokeStyle = 'grey';
      this.context.lineCap = 'butt';
      this.context.lineWidth = 3;
      this.context.arc(28, -15, 5, 0, 1.8*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(30, 5, 3, 0, 1.5*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(52, 2, 2, 0, Math.PI);
      this.context.stroke();

      this.context.restore();
    },

    'asteroid2': function() {
      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      this.context.beginPath();
      this.context.fillStyle = 'darkgrey';
      this.context.moveTo(0, 0);
      this.context.lineTo(12, -22);
      this.context.lineTo(44, -22);
      this.context.lineTo(66, 0);
      this.context.lineTo(55, 30);
      this.context.lineTo(44, 43);
      this.context.lineTo(16, 48);
      this.context.arc(-1, 40, 8,0.5*Math.PI, 0.7*Math.PI);
      this.context.lineTo(-28, 16);
      this.context.arc(12, -22, 4, 0, Math.PI)
      //this.context.lineTo(0, 0);
      this.context.fill();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(-14, 15, 5, 0, 1.8*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(6, 25, 6, 0, 1.5*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.fillStyle = 'grey';
      this.context.arc(32, 25, 10, 0, 1.5*Math.PI);
      this.context.fill();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(52, 2, 2, 0, Math.PI);
      this.context.stroke();

      this.context.restore();

    },

    'asteroid3': function() {
      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      this.context.beginPath();
      this.context.fillStyle = 'darkgrey';
      this.context.moveTo(0, 0);
      this.context.lineTo(6, -16);
      this.context.lineTo(12, -18);
      this.context.lineTo(32, -27);
      this.context.lineTo(60, -24);
      this.context.lineTo(74, -29);
      this.context.lineTo(79, -27);
      this.context.lineTo(82, 0);
      this.context.lineTo(76, 22);
      this.context.lineTo(46, 16);
      this.context.lineTo(24, 16);
      this.context.arc(24, 0, 14, 0,0.7*Math.PI);
      this.context.lineTo(12, 16);
      this.context.lineTo(6, 14);
      this.context.lineTo(0, 0);
      this.context.fill();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(18, 2, 6, 0.3*Math.PI, 1.4*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.fillStyle = 'grey';
      this.context.arc(48, -4, 6, 0.2*Math.PI, 1.7*Math.PI);
      this.context.fill();

      this.context.beginPath();
      this.context.fillStyle = 'grey';
      this.context.arc(36, -14, 6, 0.7*Math.PI, 2*Math.PI);
      this.context.fill();

      this.context.beginPath();
      this.context.lineCap = 'butt';
      this.context.strokeStyle = 'grey';
      this.context.lineWidth = 3;
      this.context.arc(72, 10, 6, Math.PI, 1.75*Math.PI);
      this.context.stroke();

      this.context.restore();

    }
  },

  'shooting_star': function() {

    this.context.save();
    this.context.translate(this.viewX,this.viewY);
    this.context.rotate(this.rotation);

    gradientStyle = this.context.createLinearGradient(0, 0, 200, 0);
    gradientStyle.addColorStop(0, this.color);
    gradientStyle.addColorStop(1, "white");

    this.context.beginPath();
    this.context.fillStyle = gradientStyle;
    this.context.moveTo(0,0);
    this.context.lineTo(126,18);
    this.context.lineTo(126,-18);
    this.context.fill();

    var gradientStyle = this.context.createRadialGradient(75, 50, 5, 90, 60, 100);
    gradientStyle.addColorStop(0, this.color);
    gradientStyle.addColorStop(1, "white");

    this.context.beginPath();
    this.context.fillStyle = gradientStyle;
    this.context.arc(120,0,18,0,2*Math.PI);
    this.context.fill();

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
      this.context.arc(0,0,this.width,0,2*Math.PI);
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
        this.context.arc(0,0,this.width,0,2*Math.PI);
        this.context.fill();

        let ring = new Path2D();
        ring.moveTo(-this.width+5,-10);
        ring.bezierCurveTo(-this.width*3.5,25,this.width*3.5,25,this.width-5,-10);
        ring.moveTo(this.width-5,-10);
        ring.bezierCurveTo(this.width*2.3,15,-this.width*2,.315,-this.width+5,-10);
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

    this.context.restore();

  },

  'meteor_shower': function() {
    this.context.save();
    this.context.translate(this.viewX,this.viewY);

    this.context.beginPath();
    this.context.arc(150,75,50,0.3*Math.PI,0.7*Math.PI);
    this.context.bezierCurveTo(100,90,120,75,Math.random()*(122-118)+118,60);
    this.context.lineTo(130,80);
    this.context.lineTo(Math.random()*(127-123)+123,40);
    this.context.lineTo(140,60);
    this.context.lineTo(150,Math.random()*5);
    this.context.lineTo(160,60);
    this.context.lineTo(Math.random()*(177-173)+173,40);
    this.context.lineTo(170,80);
    var rightx = Math.random()*(182-178)+178;
    this.context.lineTo(rightx,60);
    this.context.bezierCurveTo(rightx,75,200,90,179,116);
    this.context.fillStyle = '#FFD54F';
    this.context.fill();

    this.context.beginPath();
    this.context.arc(150,100,18,0,2*Math.PI);
    this.context.fillStyle = '#A1887F';
    this.context.fill();

    this.context.beginPath();
    this.context.arc(140,100,3,0,1.2*Math.PI);
    this.context.strokeStyle = '#5D4037';
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(160,105,4,0,0.8*Math.PI);
    this.context.strokeStyle = '#5D4037';
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(155,93,3,0,1.8*Math.PI);
    this.context.strokeStyle = '#5D4037';
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(150,96,22,1.7*Math.PI,1.3*Math.PI);
    this.context.quadraticCurveTo(145,80,150,60);
    this.context.quadraticCurveTo(155,80,163,78);
    this.context.fillStyle = 'rgba(255,138,101,0.5)';
    this.context.fill();

    this.context.restore();
  }

}
