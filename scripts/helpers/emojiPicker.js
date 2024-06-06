import { grey, warm } from "../data/weather.js";

const emoji = (weather) => {
  let selected;
  if (warm.includes(weather)) {
    selected = "sun.png";
  } else if (grey.includes(weather)) {
    selected = "cloudy.png";
  } else if (weather === "Thunderstorms" || "Showers") {
    selected = "storm.png";
  }

  return selected;
};

export { emoji };
