import { cities } from "./data/citys.js";

const city = cities[9].name;
const latitude = cities[9].latitude;
const longitude = cities[9].longitude;

const weatherFetch = async (latitude, longitude) => {
  try {
    let res = await fetch(
      `https://api.weather.gov/points/${latitude},${longitude}`
    );

    res = await res.json();

    forcast(res.properties.forecastHourly);
  } catch (e) {
    return e;
  }
};

const forcast = async (url) => {
  try {
    let res = await fetch(url);
    res = await res.json();
    console.log(res.properties);
    const weather = {
      minTemp: res.properties.minTemperature,
      maxTemp: res.properties.maxTemperature,
    };
  } catch (e) {
    console.log(e);
  }
};

weatherFetch(latitude, longitude);
