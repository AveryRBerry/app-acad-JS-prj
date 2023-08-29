import SunMoon from "./drawSunMoon";
import MountainBackground from "./drawBackground";
import WindMill from "./drawWindMill";

class UpdateCanvas {
    constructor(hours, windSpeed) {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.hours = hours
        this.background = new MountainBackground();
        this.newSunMoon = new SunMoon(this.hours, this.background);
        this.windSpeed = windSpeed;
        this.newWindMill = new WindMill(windSpeed);

        this.startDisplay();
    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    startDisplay = () => {
        this.clear();
        if(this.drawNewSunPos() && (this.hours >= 19 || this.hours < 6)) this.drawNewMoonPos() 
        this.drawBackground();
        this.animateWindMills();
        requestAnimationFrame(this.startDisplay);
    }

    drawNewSunPos = () => {
        return this.newSunMoon.updateSun()
    }

    drawNewMoonPos = () => {
        this.newSunMoon.updateMoon()
    }

    drawBackground = () => {
        this.background.drawField();
        this.background.drawMountainBackground();
    }

    animateWindMills = () => {
        this.newWindMill.drawWindmill();
    }

}

export default UpdateCanvas