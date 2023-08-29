const API_KEY = "7dff519f917b5485d7f4dfe9e415db09";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="

const getWeather = async (cityName) => {
    const response = await fetch(`${API_URL}${cityName}&appid=${API_KEY}`);
    const weatherData = await response.json();
    console.log(weatherData)
    return weatherData;
}
export default getWeather
