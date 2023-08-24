class DisplayWeather {
    constructor (el, weatherData) {
        this.weatherData = weatherData;
        this.el = el;
        this.el.innerHTML = "<h1>Stuck in DisplayWeather constructor</h1>";
        // this.weather. = weatherData.weather.;
    }

    displayWeather = () => {
        this.el.children[0].innerText = `Weather ${this.weatherData.weather[0].main}`;
    }

}

export default DisplayWeather;