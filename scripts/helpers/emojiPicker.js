import { grey, warm } from "../data/weather.js";

const emoji = (weather, bool) => {
  let selected;
  if (bool === true) {
    if (warm.includes(weather)) {
      selected = "sun.png";
    } else if (grey.includes(weather)) {
      selected = "cloudy.png";
    } else if (weather === "Thunderstorms" || "Showers") {
      selected = "storm.png";
    } else {
      selected = "none";
    }
  } else if (bool === false) {
    if (warm.includes(weather)) {
      selected = "crescent-moon.png";
    } else if (grey.includes(weather)) {
      selected = "cloud.png";
    } else if (weather === "Thunderstorms" || "Showers") {
      selected = "thunder.png";
    }
  }

  return selected;
};

export { emoji };
