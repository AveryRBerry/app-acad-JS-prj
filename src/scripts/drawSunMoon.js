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
            x: 200, 
            y: 150, 
            w: 150,  
            h: 20  
        }

    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawSun = () => {

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
        this.clear();

        if (this.hours >= 6 && this.sun.x < (1/70)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size += .25;
        }
        if (this.hours >= 8 && this.sun.x < (1/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size += .25;
        }
        else if (this.hours >= 11 && this.sun.x < (3/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size += .5;
        }
        else if (this.hours >= 13 && this.sun.x < (5/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size += .5;
        }
        else if (this.hours >= 15 && this.sun.x < (7/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size -= .5;
        }
        else if (this.hours >= 17 && this.sun.x < (9/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size -= .5;
        }
        else if (this.hours >= 19 && this.sun.x < (10/10)*this.canvas.width ) {
                this.sun.x += this.sun.dx;
                this.sun.size -= .25;
        } 
        else { 
        this.drawSun();
        return false;
        }
        this.drawSun();
        return true;
    }
    
    drawMoon = () => {
        this.ctx.beginPath();
        this.ctx.arc(this.moon.x, this.moon.y, this.moon.w / 2, Math.PI * 2, 0, true);
        this.ctx.fillStyle = "yellow";
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(this.moon.x - 25, this.moon.y - 10, this.moon.w / (3), Math.PI * 2, 0, true);
        this.ctx.fillStyle = "white";
        this.ctx.fill();

    }

}

export default SunMoon;