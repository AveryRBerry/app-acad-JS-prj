import getWeather from "./scripts/getWeatherData";
import UpdateCanvas from "./scripts/updater";

document.addEventListener("DOMContentLoaded", async function() {
    const main = document.getElementById("main");

    const demoWindSpeed = 30;
    const demoHours = 1; //temp for testing
    const demoUpdater = new UpdateCanvas(demoHours, demoWindSpeed);
    
    const searchForm = document.getElementById('searchForm');
    const container = document.getElementById('container');
    const button = document.getElementById('demoButton');

    // button.addEventListener('click', async function(event) {
    //     event.preventDefault();
    //     container.style.display = 'none';

    //     const weatherData = await getWeather("New York");
    //     const utcShift = Math.ceil(weatherData.timezone/60/60)

    //     const unixTimeStamp = weatherData.dt;
    //     const date = new Date(unixTimeStamp * 1000);
    //     let hours = date.getUTCHours() + utcShift;
    //     if (hours>24) hours -= 24;
    //     // const temp = weatherData.main.temp;
    //     const windSpeed = weatherData.wind.speed;
    //     // const weatherType = weatherData.weather[0].main;
    //     const newUpdater = new UpdateCanvas(hours, windSpeed);
    // })


    searchForm.addEventListener('click', async function(event) {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        const cityName = searchInput.value;

        const weatherData = await getWeather(cityName);
        const utcShift = Math.ceil(weatherData.timezone/60/60)
        const unixTimeStamp = weatherData.dt;
        const date = new Date(unixTimeStamp * 1000);
        let hours = date.getUTCHours();
        // if (hours>24) hours -= 24;
        // const temp = weatherData.main.temp;
        const windSpeed = weatherData.wind.speed;
        // const weatherType = weatherData.weather[0].main;
        const newUpdater = new UpdateCanvas(hours, windSpeed);

        // console.log(date.getUTCHours())
        // console.log("date.getUTCHours()")
        // console.log(utcShift)
        // console.log("utcShift")
        console.log(hours)
        console.log("hours")
        // console.log(weatherData.timezone)
        // console.log("weatherData.timezone")
        // i need to mak an "if" date.getUTCHours() + utcShift > 

        container.style.display = 'none';
        searchInput.value = '';
    })

});