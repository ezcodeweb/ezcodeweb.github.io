const apiKey = `775aab68f59917076a1b59df2054c985`;

const loadTemperature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

document.getElementById("btn-city-search").addEventListener("click", function () {
    // getting city data by the user input
    const citySearch = document.getElementById("city-search").value;
    loadTemperature(citySearch);

})

function displayTemperature(tempData) {
    setInnerTextbyID("city-name", tempData.name);
    setInnerTextbyID("current-temp", tempData.main.temp);
    setInnerTextbyID("feels-like-temp", tempData.main.feels_like);
    setInnerTextbyID("weather-type", tempData.weather[0].description);
    setInnerTextbyID("hum", tempData.main.humidity);
    setInnerTextbyID("wind-speed", tempData.wind.speed);
    setInnerTextbyID("wind-speedkm", tempData.wind.speed*3,6);
}

function setInnerTextbyID(id, text) {
    const city = document.getElementById(id);
    return city.innerText = text;
}