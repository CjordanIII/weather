import { grey, warm } from "../data/weather.js";

const color = (colorType, bool) => {
  let weatherColor;
  // bg-gradient-to-r from-slate-200 to-zinc-500
  if (bool === true) {
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
  } else if (bool === false) {
    if (warm.includes(colorType)) {
      weatherColor = "bg-gradient-to-r from-slate-200 to-zinc-500";
    } else if (colorType === "Snow") {
      weatherColor = "bg-gradient-to-r from-slate-200 to-zinc-500";
    } else if (grey.includes(colorType)) {
      weatherColor = "bg-gradient-to-r from-slate-200 to-zinc-500";
    } else if (colorType === "Fog") {
      weatherColor = "none";
    } else {
      weatherColor = "none";
    }
  }

  return weatherColor;
};

export { color };
