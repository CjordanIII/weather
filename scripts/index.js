import { cities } from "./data/citys.js";
import { card, card2 } from "./dombuilders/card.js";
import getPeriods from "./helpers/getPeriods.js";

// dev only
const city = cities[9].name;
const latitude = cities[9].latitude;
const longitude = cities[9].longitude;
const card1Data = {
  imgSrc: "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg",
  altData: "sun",
  h2Data: "Dallas",
  pData: "temp: 32&deg",
  p1Data: "winds: NNE 6MPH",
  p2Data: "Partly cloudy",
};

const handleWeather = async () => {
  const card1 = document.querySelector("#card1");
  const cardtwo = document.querySelector("#card2");
  const data = await getPeriods(latitude, longitude);

  const day = await data.filter((name) => name.name.split(" ").length < 2);
  const otherdays = await day.filter(
    (notToday) => notToday.name != "Today" && notToday.name != "Tonight"
  );
  const today = await day.find((name) => (name.name = "Today"));
  console.log(otherdays);
  // to day cards
  card2(cardtwo, today);
  // Row of cards
  otherdays.forEach((dayData) => {
    console.log(dayData);
    card(card1, dayData);
  });
  // card(card1, card1Data);
};

handleWeather();
