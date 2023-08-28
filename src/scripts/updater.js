import SunMoon from "./drawSunMoon";
import MountainBackground from "./drawBackground";

class UpdateCanvas {
    constructor(hours) {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.hours = hours
        this.background = new MountainBackground();
        this.newSunMoon = new SunMoon(this.hours, this.background);

        this.drawSunPos();
        // if (this.hours >=19 || this.hours <= 6) this.drawNewMoonPos();
    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawSunPos = () => {
        this.clear();
        if (this.newSunMoon.updateSun()) {
            requestAnimationFrame(this.drawSunPos);
        } else if (this.hours >=19 || this.hours < 6) {
            this.drawNewMoonPos();
        }
        this.drawBackground();
    }

    drawNewMoonPos = () => {
        this.clear();
        if (this.newSunMoon.updateMoon()) requestAnimationFrame(this.drawNewMoonPos)
        this.drawBackground();
    }

    drawBackground = () => {
        this.background.drawField();
        this.background.drawMountainBackground();
    }
}

export default UpdateCanvas