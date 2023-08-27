import getWeather from "./scripts/getWeatherData";
import UpdateCanvas from "./scripts/updater";

document.addEventListener("DOMContentLoaded", async function() {
    const main = document.getElementById("main");

    // const weatherData = await getWeather();
    // const unixTimeStamp = weatherData.dt;
    // const date = new Date(unixTimeStamp * 1000);
    // const hours = date.getHours();
    // const temp = weatherData.main.temp;
    // const windSpeed = weatherData.wind.speed;
    // const weatherType = weatherData.weather[0].main;

    const hours = 17; //temp for testing

    const newUpdater = new UpdateCanvas(hours);
});