console.log("Client side javascript is loaded");

const getWeatherInfo = async (city) => {
  var weatherData;
  await fetch(`/weather?city=${city}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      weatherData = data;
    })
    .catch((error) => {
      return error;
    });
  return weatherData;
};

const weatherForm = document.getElementById("weather-form");
const searchInput = document.getElementById("city");
const weatherDataDiv = document.createElement("div");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let location = searchInput.value;

  getWeatherInfo(location)
    .then((response) => {
      let weatherContent = "";
      weatherContent += `<h3>Temp: ${response.temp_c}<h3><br>
                       <h3>Humidity: ${response.humidity}</h3>`;
      weatherDataDiv.innerHTML = weatherContent;
      weatherForm.appendChild(weatherDataDiv);
      //weatherDataDiv.classList.toggle("show-weather-data");
    })
    .catch((error) => {
      console.log(error);
    });
});
