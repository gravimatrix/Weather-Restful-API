const axios = require("axios");

const forecast = async (city) => {
  var forecast;
  try {
    await axios
      .get("https://api.weatherapi.com/v1/current.json", {
        params: {
          key: "f0d21979439d4c5abba85044212908",
          q: city,
          aqi: "yes",
        },
      })
      .then((response) => {
        forecast = response.data.current;
      })
      .catch((error) => {
        console.log("Error", error.message);
        forecast = {
          error: "couldn't fetch the data",
        };
      });
  } catch (e) {
    forecast = {
      error: "couldn't fetch the data",
    };
  }

  return forecast;
};

module.exports = { getForecast: forecast };
