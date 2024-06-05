import { cities } from "./data/citys.js";
import getPeriods from "./helpers/getPeriods.js";
// dev only
const city = cities[9].name;
const latitude = cities[9].latitude;
const longitude = cities[9].longitude;

const data = async () => {
  const data = await getPeriods(latitude, longitude);
  console.log(data);
};

data();
