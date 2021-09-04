const express = require("express");
const path = require("path");

const app = express();

const publicDirPath = path.join(__dirname, "../public");
const htmlDirPath = path.join(__dirname, "../public/html");

app.use(express.static(publicDirPath));
app.use(express.static(htmlDirPath));

app.get("/getWeatherData", (req, res) => {
  res.send([
    {
      temp: "45 C",
    },
    {
      temp: "41 C",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
