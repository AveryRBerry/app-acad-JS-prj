const newBlades = new Image();
newBlades.src = 'src/windmill2.png';

class WindMill {
    constructor (windSpeed) {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.windSpeed = windSpeed

        this.windmill = {
            bladeSize: 300,
            angle: 0,
        }
    }

    drawWindmill = () => {
        this.drawWindMillsBase(100, this.canvas.height-20);
        this.drawWindMillsBase(300, this.canvas.height-20 - 100, .7);
        this.drawWindMillsBase(500, this.canvas.height-20 - 200, .4);
        this.drawWindMillsBase(600, this.canvas.height-20 - 250, .2);
    }

    drawWindMillsBase = (xs, ys, sizer = 1) => {
        this.ctx.beginPath();

        this.ctx.moveTo(xs +50*sizer,  ys - 300*sizer); //1// top mid point (where blades attach 2)
        this.ctx.lineTo(xs +45*sizer,  ys - 300*sizer); //2
        this.ctx.lineTo(xs +35*sizer,  ys - 5*sizer);   //3
        this.ctx.lineTo(xs +20*sizer,  ys);       //4
        this.ctx.lineTo(xs +10*sizer,  ys + 3*sizer);   //5
        this.ctx.lineTo(xs +0*sizer,   ys + 10*sizer);  //6
        this.ctx.lineTo(xs +0*sizer,   ys + 20*sizer);  //7
        this.ctx.lineTo(xs +100*sizer, ys + 20*sizer);  //8
        this.ctx.lineTo(xs +100*sizer, ys + 10*sizer);  //9
        this.ctx.lineTo(xs +90*sizer,  ys + 3*sizer);   //10
        this.ctx.lineTo(xs +80*sizer,  ys);       //11
        this.ctx.lineTo(xs +65*sizer,  ys - 5*sizer);   //12
        this.ctx.lineTo(xs +55*sizer,  ys - 300*sizer); //13
        this.ctx.lineTo(xs +50*sizer,  ys - 300*sizer); //14

        this.ctx.fillStyle = "gray";
        this.ctx.fill();
        this.ctx.closePath();

        this.drawWindmillFans(xs, ys, sizer);
    }

    drawWindmillFans = (xs, ys, sizer = 1) => {
        this.ctx.save();
        this.ctx.translate(xs + 50*sizer, ys - 300*sizer);
        this.ctx.rotate(this.windmill.angle * Math.PI/360)
        this.ctx.drawImage(newBlades, (0 - this.windmill.bladeSize/2)* sizer , (0 - this.windmill.bladeSize/2 -50)* sizer, this.windmill.bladeSize * sizer, this.windmill.bladeSize * sizer);
        this.windmill.angle += .1*this.windSpeed;
        this.ctx.restore();

    }
}

export default WindMill;