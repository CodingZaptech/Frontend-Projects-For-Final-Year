const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherResult = document.getElementById('weatherResult');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if(city === "") { alert("Enter city name"); return; }
    weatherResult.textContent = `Weather in ${city}: Sunny, 25°C`; // Placeholder
});
