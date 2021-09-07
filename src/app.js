const express = require("express");
const path = require("path");
const forecast = require("./utils/forecast");

const app = express();

const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/contact.html"));
});

app.get("/weather", async (req, res) => {
  if (req.query.city) {
    try {
      await forecast
        .getForecast(req.query.city)
        .then((response) => {
          res.send(response);
        })
        .catch((error) => {
          res.send({ error: "couldn't fetch data" });
        });
    } catch (error) {
      res.send({ error: "couldn't fetch data" });
    }
    return;
  }

  res.send({ error: "couldn't fetch data" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is up on port " + process.env.PORT || 5000);
});
