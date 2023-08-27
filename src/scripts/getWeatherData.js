const API_KEY = "7dff519f917b5485d7f4dfe9e415db09";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=New%20York"

const getWeather = async () => {
    const response = await fetch(`${API_URL}&appid=${API_KEY}`);
    const weatherData = await response.json();
    return weatherData;
}
export default getWeather
