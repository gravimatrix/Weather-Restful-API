const express = require("express");
const path = require("path");

const app = express();

const publicDirPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");

app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

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
