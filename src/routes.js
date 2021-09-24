const express = require("express");
const routes = express.Router();
const WeatherController = require("./controllers/WeatherController")

routes.get("/api/v1/", WeatherController.index);
routes.post("/api/v1/city/:city", WeatherController.weatherPerCity);
routes.post("/api/v1/geo/", WeatherController.weatherGeo);


module.exports = routes;