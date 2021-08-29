const axios = require("axios");

axios
  .get("http://api.weatherstack.com/current", {
    params: {
      access_key: "3e8cfdead0dc17e93742f7fa9c9a26b8",
      query: "Dhenkanal",
      units: "m",
    },
  })
  .then(function (response) {
    console.log(response.data.current);
  })
  .catch(function (error) {
    console.log(error);
  });
