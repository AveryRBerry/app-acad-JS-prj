class WeatherData {
    constructor () {
        // this.ele = ele
        // this.ele.innerHTML = "<h1>Whats the weather</h1>";
        // this.ele.addEventListener("click", this.handleClick.bind(this))

        this.apiKey = "7dff519f917b5485d7f4dfe9e415db09";
        this.apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=New%20York"
    }

    checkWeather = async () => {
        const response = await fetch(this.apiURL + `&appid=${this.apiKey}`);
        const WeatherData = await response.json();
        return WeatherData;
    }

}
export default WeatherData




    // handleClick = async () => {
    //     this.getTemp()
    //     // console.log(await this.getTemp())
    // }



    // getTemp = async () => {
    //     const WeatherData = await this.checkWeather();
    //     // this.ele.children[0].innerText = `Temp ${temp}`;
    //     return WeatherData.main.temp
    // }
