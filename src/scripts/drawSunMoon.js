class SunMoon {
    constructor (hours, background) {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.hours = hours;
        this.background = background;

        this.sun = {
            x: -100,
            y: 200,
            size: 100,
            dx: 4,
            dy: 4
        }

        this.moon = {
            x: -100, 
            y: 200, 
            dx: 4,
            dy: 4,
            w: 150,  
            h: 20 , 
            wNot: 150
        }

        this.sky = {
            color1: 90,
            color2: 138
        }
    }

    drawSky = () => {
        this.ctx.fillStyle = `rgb(0, ${this.sky.color1}, ${this.sky.color2})`; 
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawSun = () => {
        // this.ctx.shadowBlur = 10;
        // this.ctx.shadowColor = "yellow";
        const gradient = this.ctx.createRadialGradient(
            this.sun.x, this.sun.y, 0, 
            this.sun.x, this.sun.y, this.sun.size 
        );
        gradient.addColorStop(0, 'rgb(242, 250, 7)');   
        gradient.addColorStop(1, 'rgb(255, 205, 3)');

        this.ctx.beginPath();
        this.ctx.arc(this.sun.x, this.sun.y, this.sun.size, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient
        this.ctx.fill();

    }

    updateSun = () => {

        if (this.sun.x >= (12/10)*this.canvas.width ) {
            this.drawSky();  
            this.drawSun();
            return true;
        }

        if ((this.hours >= 0 && this.hours < 6) && this.sun.x < (12/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                if (this.sun.x < (5/10)*this.canvas.width) {
                    this.sun.size += .4;
                    this.sky.color1 += .4;
                    this.sky.color2 += .4;
                } else {
                    this.sun.size -= .4;
                    this.sky.color1 -= .6;
                    this.sky.color2 -= .6;
                }
        } 
        else if (this.hours >= 6 && this.sun.x < (1/70)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size += .25;
                this.sky.color1 += .5;
                this.sky.color2 += .5;
        } 
        else if (this.hours >= 8 && this.sun.x < (1/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size += .25;
                this.sky.color1 += .5;
                this.sky.color2 += .5;
        }
        else if (this.hours >= 11 && this.sun.x < (3/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size += .5;
                this.sky.color1 += .5;
                this.sky.color2 += .5;
        }
        else if (this.hours >= 13 && this.sun.x < (5/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size += .5;
                // this.sky.color1 -= .5
                // this.sky.color2 -= .5
        }
        else if (this.hours >= 15 && this.sun.x < (7/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size -= .5;
                this.sky.color1 -= .5;
                this.sky.color2 -= .5;
        }
        else if (this.hours >= 17 && this.sun.x < (9/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size -= .5;
                this.sky.color1 -= .5;
                this.sky.color2 -= .5;
        }
        else if (this.hours >= 19 && this.sun.x < (12/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size -= .25;
                this.sky.color1 -= .5;
                this.sky.color2 -= .5;
        } 
        this.drawSky();
        this.drawSun();
    }

    updateMoon = () => {

        if ((this.hours >= 19 && this.hours < 21) && this.moon.x < (1/10)*this.canvas.width ) {
            this.moon.x += this.moon.dx;
            if (this.moon.x <= (5/10)*this.canvas.width) {
                this.moon.w += 1;
                this.moon.wNot += (1 + 1/6);
            } else {
                this.moon.w -= 1;
                this.moon.wNot -= (1 + 1/6);
            }
        } 
        else if ((this.hours >= 21 && this.hours < 23)  && this.moon.x < (3/10)*this.canvas.width ) {
            this.moon.x += this.moon.dx;
            if (this.moon.x <= (5/10)*this.canvas.width) {
                this.moon.w += 1;
                this.moon.wNot += (1 + 1/6);
            } else {
                this.moon.w -= 1;
                this.moon.wNot -= (1 + 1/6);
            }
        } 
        else if ((this.hours >= 23 && this.hours <= 24)  && this.moon.x < (5/10)*this.canvas.width ) {
            this.moon.x += this.moon.dx;
            if (this.moon.x <= (5/10)*this.canvas.width) {
                this.moon.w += 1;
                this.moon.wNot += (1 + 1/6);
            } else {
                this.moon.w -= 1;
                this.moon.wNot -= (1 + 1/6);
            }
        } 
        else if ((this.hours >= 0 && this.hours < 2)  && this.moon.x < (7/10)*this.canvas.width ) {/////
            this.moon.x += this.moon.dx;
            if (this.moon.x <= (5/10)*this.canvas.width) {
                this.moon.w += 1;
                this.moon.wNot += (1 + 1/6);
            } else {
                this.moon.w -= 1;
                this.moon.wNot -= (1 + 1/6);
            }
        } 
        else if ((this.hours >= 2 && this.hours < 4)  && this.moon.x < (9/10)*this.canvas.width ) {
            this.moon.x += this.moon.dx;
            if (this.moon.x <= (5/10)*this.canvas.width) {
                this.moon.w += 1;
                this.moon.wNot += (1 + 1/6);
            } else {
                this.moon.w -= 1;
                this.moon.wNot -= (1 + 1/6);
            }
        } 
        else if ((this.hours >= 4 && this.hours < 6)  && this.moon.x < (10/10)*this.canvas.width ) {
            this.moon.x += this.moon.dx;
            if (this.moon.x <= (5/10)*this.canvas.width) {
                this.moon.w += 1;
                this.moon.wNot += (1 + 1/6);
            } else {
                this.moon.w -= 1;
                this.moon.wNot -= (1 + 1/6);
            }
        } 
        this.drawSky();
        // this.drawStars
        this.drawMoon();

        // fix growth of moon!!!!
        // if (this.moon.x <= (5/10)*this.canvas.width) {
        //     this.moon.w += 1;
        //     this.moon.wNot += (1 + 1/6);
        // } else {
        //     this.moon.w -= 1;
        //     this.moon.wNot -= (1 + 1/6);
        // }
    }
    
    drawMoon = () => {
        this.ctx.beginPath();
        this.ctx.arc(this.moon.x, this.moon.y, this.moon.w / 2, Math.PI * 2, 0, true);
        this.ctx.fillStyle = "white";
        this.ctx.fill();

        this.ctx.beginPath();
        if (this.moon.x <= (5/10)*this.canvas.width) {
            this.ctx.arc(this.moon.x - 28 - (1/20 * this.moon.x), this.moon.y - (1/20 * this.moon.x), this.moon.wNot / (3), Math.PI * 2, 0, true);
        } else {
            this.ctx.arc(this.moon.x -26 - (1/20 * this.canvas.width/2), this.moon.y - (1/20 * this.canvas.width/2), this.moon.wNot / (3), Math.PI * 2, 0, true);
        }
        this.ctx.fillStyle = `rgb(0, ${this.sky.color1}, ${this.sky.color2})`;
        this.ctx.fill();

    }

    drawStars = () => {
    
    }

}

export default SunMoon;