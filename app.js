const axios = require("axios");

axios
  .get("https://api.weatherapi.com/v1/current.json", {
    params: {
      key: "f0d21979439d4c5abba85044212908",
      q: "Dhenkanal",
      aqi: "yes",
    },
  })
  .then(function (response) {
    console.log(response.data.current);
  })
  .catch(function (error) {
    console.log(error.response);
  });
