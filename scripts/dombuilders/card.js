import { color } from "../helpers/colorPicker.js";
import { emoji } from "../helpers/emojiPicker.js";
const card = (parent, obj) => {
  const { name, shortForecast, windDirection, windSpeed, temperature } = obj;
  const div = document.createElement("div");
  div.className = "card w-40  text-center ";
  const h2 = document.createElement("h2");

  h2.className = "card-title justify-center pb-10";
  h2.innerText = name;
  div.appendChild(h2);
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const image = emoji(shortForecast);
  img.src = `../../assets/icons/${image}`;
  img.alt = image;

  img.style.width = "4.688rem";
  img.style.height = "4.688rem";
  figure.appendChild(img);
  div.appendChild(figure);
  const div2 = document.createElement("div");
  div2.className = "card-body pt-24";
  const p = document.createElement("p");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p.innerHTML = temperature + "&deg";
  p1.innerHTML = `${windDirection}  ${windSpeed}`;
  p2.innerHTML = shortForecast;
  div2.appendChild(p);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div.appendChild(div2);

  parent.appendChild(div);
};

const card2 = (parent, obj) => {
  const { name, shortForecast, windDirection, windSpeed, temperature } = obj;
  const div = document.createElement("div");
  let weatherColor = color(shortForecast);

  div.className = `card w-96 pb-5 glass text-center mr-24 ${weatherColor} `;

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const image = emoji(shortForecast);
  img.src = `../../assets/icons/${image}`;
  img.alt = image;
  img.style.width = "20rem";
  img.style.height = "20rem";
  figure.className = "pt-24";
  figure.appendChild(img);

  const div2 = document.createElement("div");
  div2.className = "card-body pt-24";
  const h2 = document.createElement("h2");

  h2.className = "card-title justify-center text-5xl ";
  h2.innerText = name;
  div2.appendChild(h2);
  div.appendChild(figure);
  const p = document.createElement("p");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p.innerHTML = temperature + "&deg";
  p1.innerHTML = `${windDirection}  ${windSpeed}`;
  p2.innerHTML = shortForecast;
  div2.appendChild(p);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div.appendChild(div2);

  parent.appendChild(div);
};
export { card, card2 };
