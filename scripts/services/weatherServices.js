// private
const forcast = async (url) => {
  try {
    let res = await fetch(url);
    res = await res.json();
    return res.properties;
  } catch (e) {
    console.log(e);
  }
};
// public
const weatherFetch = async (latitude, longitude) => {
  console.log(latitude, longitude);
  try {
    let res = await fetch(
      `https://api.weather.gov/points/${latitude},${longitude}`
    );

    res = await res.json();

    return await forcast(res.properties.forecast);
  } catch (e) {
    return e;
  }
};

export default weatherFetch;
