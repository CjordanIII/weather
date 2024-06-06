import { cities } from "./data/citys.js";
import { card, card2 } from "./dombuilders/card.js";
import getPeriods from "./helpers/getPeriods.js";
const dayNightToggle = document.querySelector("#daynight");
// dev only
const city = cities[8].name;
const latitude = cities[8].latitude;
const longitude = cities[8].longitude;

const handleWeather = async () => {
  const card1 = document.querySelector("#card1");
  const cardtwo = document.querySelector("#card2");
  const title = document.querySelector("#title");

  title.innerText = city;
  const data = await getPeriods(latitude, longitude);

  const day = await data.filter((name) => name.number % 2 !== 0);

  const otherdays = await day.filter(
    (notToday) => notToday.number != 1 && notToday.number != 2
  );

  const today = await data.find((name) => name.number === 1);

  // night
  const night = await data.filter(
    (name) => name.number % 2 === 0 && name.number != 2
  );

  const tonight = await data.find((name) => name.number === 2);

  card2(cardtwo, today, today.isDaytime);
  // Row of cards
  otherdays.forEach((dayData) => {
    card(card1, dayData, dayData.isDaytime);
  });

  // btn switch
  dayNightToggle.addEventListener("change", (e) => {
    // clear out before start

    if (!e.target.checked) {
      card1.innerHTML = "";
      cardtwo.innerHTML = "";

      // to day cards
      card2(cardtwo, today, today.isDaytime);
      // Row of cards
      otherdays.forEach((dayData) => {
        console.log(dayData);
        card(card1, dayData, dayData.isDaytime);
      });
    } else if (e.target.checked) {
      card1.innerHTML = "";
      cardtwo.innerHTML = "";

      // to day cards
      card2(cardtwo, tonight, tonight.isDaytime);
      // Row of cards
      night.forEach((nightData) => {
        card(card1, nightData, nightData.isDaytime);
      });
    }
  });
};

handleWeather();
