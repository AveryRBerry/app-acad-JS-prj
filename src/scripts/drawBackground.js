class MountainBackground {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    drawMountain = (x, y, width, height, color) => {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + width / 2, y - height);
        this.ctx.lineTo(x + width, y);
        this.ctx.closePath();

        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

    drawMountainBackground = () => {
        this.drawMountain(50, this.canvas.height/1.5, 500, 150, 'rgb(193, 225, 193)');
        this.drawMountain(150, this.canvas.height/1.5, 650, 200, 'rgb(193, 225, 193)');
        this.drawMountain(250, this.canvas.height/1.5, 800, 150, 'rgb(193, 225, 193)');
        this.drawMountain(620, this.canvas.height/1.5, 800, 175, 'rgb(193, 225, 193)');

        this.drawMountain(900, this.canvas.height/1.5, 800, 420, 'rgb(71, 135, 120)');
        this.drawMountain(500, this.canvas.height/1.5, 800, 200, 'rgb(71, 135, 120)');

        this.drawMountain(-600, this.canvas.height/1.5, 1100, 250 , 'rgb(53, 94, 59)');///////
        this.drawMountain(0, this.canvas.height/1.5, 900, 150, 'rgb(53, 94, 59)');

        this.drawMountain(1100, this.canvas.height/1.5, 1200, 400, 'rgb(2, 48, 32)');
        this.drawMountain(650, this.canvas.height/1.5, 700, 100, 'rgb(2, 48, 32)');
        this.drawMountain(400, this.canvas.height/1.5, 500, 50, 'rgb(2, 48, 32)');
    }

    drawField = () => {
        const rectWidth = this.canvas.width;
        const rectHeight = this.canvas.height / 3;

        this.ctx.fillStyle = "rgb(110, 184, 90)";
        this.ctx.fillRect(0, this.canvas.height - rectHeight, rectWidth, rectHeight);



        this.ctx.beginPath();
        this.ctx.moveTo(-2400, 857);
        this.ctx.lineTo(755,this.canvas.height/1.6);
        this.ctx.strokeStyle = 'black'; // Set the line color
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(-500, 857);
        this.ctx.lineTo(755,this.canvas.height/1.6);
        this.ctx.strokeStyle = 'black'; // Set the line color
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(300, 857);
        this.ctx.lineTo(755,this.canvas.height/1.6);
        this.ctx.strokeStyle = 'black'; // Set the line color
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(1100, 857);
        this.ctx.lineTo(755,this.canvas.height/1.6);
        this.ctx.strokeStyle = 'black'; // Set the line color
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(2100, 857);
        this.ctx.lineTo(755,this.canvas.height/1.6);
        this.ctx.strokeStyle = 'black'; // Set the line color
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(4000, 857);
        this.ctx.lineTo(755,this.canvas.height/1.6);
        this.ctx.strokeStyle = 'black'; // Set the line color
        this.ctx.stroke();
    }

}

export default MountainBackground