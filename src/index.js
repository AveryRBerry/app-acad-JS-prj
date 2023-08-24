// import Example from "./scripts/example";
import WeatherData from "./scripts/getWeatherData";

document.addEventListener("DOMContentLoaded", async function() {
    const main = document.getElementById("main");

    const weather = new WeatherData();
    const weatherData = await weather.checkWeather()
    console.log(weatherData.main.temp)
});