import { grey, warm } from "../data/weather.js";

const color = (colorType) => {
  let weatherColor;

  if (warm.includes(colorType)) {
    weatherColor = "bg-gradient-to-b from-zinc-50 to-amber-300";
  } else if (colorType === "Snow") {
    weatherColor = "bg-gradient-to-t from-zinc-50 to-slate-800";
  } else if (grey.includes(colorType)) {
    weatherColor = "bg-gradient-to-b from-zinc-50 to-zinc-900";
  } else if (colorType === "Fog") {
    weatherColor = "none";
  } else {
    weatherColor = "none";
  }

  return weatherColor;
};

export { color };
