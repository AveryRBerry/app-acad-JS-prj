import SunMoon from "./drawSunMoon";
import MountainBackground from "./drawBackground";

class UpdateCanvas {
    constructor(hours) {
        this.hours = hours

        this.background = new MountainBackground();
        this.newSunMoon = new SunMoon(this.hours, this.background);
        this.openStartPage();
        
    }

    openStartPage = () => {
        if (this.drawNewSunMoonPos()){
        requestAnimationFrame(this.openStartPage)
        }
        this.drawBackground();
    }

    drawBackground = () => {
        this.background.drawMountainBackground();
        this.background.drawField();
    }

    drawNewSunMoonPos = () => {
        return this.newSunMoon.updateSun();
    }

}

export default UpdateCanvas