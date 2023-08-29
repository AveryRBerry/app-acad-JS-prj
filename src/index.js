import getWeather from "./scripts/getWeatherData";
import UpdateCanvas from "./scripts/updater";

document.addEventListener("DOMContentLoaded", async function() {
    const main = document.getElementById("main");

    const demoWindSpeed = 30;
    const demoHours = 1; //temp for testing
    const demoUpdater = new UpdateCanvas(demoHours, demoWindSpeed);

    const container = document.getElementById('container');
    const button = document.getElementById('startButton');
    button.addEventListener('click', async function() {
        container.style.display = 'none';

        // const weatherData = await getWeather();
        // const unixTimeStamp = weatherData.dt;
        // const date = new Date(unixTimeStamp * 1000);
        // const hours = date.getHours();
        // const temp = weatherData.main.temp;
        // const windSpeed = weatherData.wind.speed;
        // const weatherType = weatherData.weather[0].main;
        // const newUpdater = new UpdateCanvas(hours, windSpeed);
    })


});