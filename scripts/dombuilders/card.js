const card = (parent, obj) => {
  const { shortForecast, windDirection, windSpeed, temperature } = obj;
  const div = document.createElement("div");
  div.className = "card w-96 glass";

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg";
  img.alt = "img";
  figure.appendChild(img);
  div.appendChild(figure);
  const div2 = document.createElement("div");
  div2.className = "card-body";
  const h2 = document.createElement("h2");
  h2.className = "card-title";
  h2.innerText = "dallas";
  div2.appendChild(h2);
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
