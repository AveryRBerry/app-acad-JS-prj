class DisplayTemp {
    constructor (el, weatherData) {
        this.weatherData = weatherData;
        this.el = el;
        this.el.innerHTML = "<h1>stuck in DisplayTemp constructor</h1>";
        this.temp = weatherData.main.temp;
    }

    displayTemp = () => {
        this.el.children[0].innerText = `Temp ${this.temp}`;
        // this.el.children[0].innerText = `Temp ${this.weatherData.weather[0].main}`;
    }

}

export default DisplayTemp;