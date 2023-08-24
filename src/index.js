// import Example from "./scripts/example";
import WeatherData from "./scripts/getWeatherData";
import DisplayTemp from "./scripts/displayTemp";
import DisplayWeather from "./scripts/displayWeather";

document.addEventListener("DOMContentLoaded", async function() {
    const main = document.getElementById("main");

    const weather = new WeatherData();
    const weatherData = await weather.checkWeather();
    console.log(weatherData);

    const temp = new DisplayTemp(main, weatherData);
    temp.displayTemp();

    const weatherDis = new  DisplayWeather(main, weatherData);
    weatherDis.displayWeather();

});