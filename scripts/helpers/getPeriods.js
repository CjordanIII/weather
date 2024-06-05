import weatherFetch from "../services/weatherServices.js";

const getPeriods = async (latitude, longitude) => {
  const period = await weatherFetch(latitude, longitude);
  return period.periods;
};

export default getPeriods;
