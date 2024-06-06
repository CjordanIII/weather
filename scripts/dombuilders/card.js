const card = (parent, obj) => {
  const { name, shortForecast, windDirection, windSpeed, temperature } = obj;
  const div = document.createElement("div");
  div.className = "card w-52 pb-64 glass text-center ";
  const h2 = document.createElement("h2");

  h2.className = "card-title justify-center";
  h2.innerText = name;
  div.appendChild(h2);
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = "../../assets/icons/sun.png";
  img.alt = "img";

  img.style.width = "4.688rem";
  img.style.height = "4.688rem";
  figure.appendChild(img);
  div.appendChild(figure);
  const div2 = document.createElement("div");
  div2.className = "card-body";
  const p = document.createElement("p");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p.innerHTML = temperature;
  p1.innerHTML = `${windDirection}  ${windSpeed}`;
  p2.innerHTML = shortForecast;
  div2.appendChild(p);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div.appendChild(div2);

  parent.appendChild(div);
};

export { card };
