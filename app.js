const request = require("request");

var url =
  "http://api.weatherstack.com/current?" +
  "access_key=3e8cfdead0dc17e93742f7fa9c9a26b8" +
  "&query=Dhenkanal" +
  "&units=m";

request({ url: url, json: true }, (err, res) => {
  if (err) {
    console.log("Unable to connect to weatherstack: ",err);
  } else if (res.body.error) {
    console.log("Unable to get the response: ",res.body.error);
  } else {
    console.log(res.body.current);
  }
});
