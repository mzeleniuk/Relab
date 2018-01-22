import axios from 'axios';

// NodeJS reverse proxy which adds CORS headers to the proxied request
// https://forum.freecodecamp.com/t/openweathermap-not-showing-on-github-pages-solved/101836
const PROXY_URL= 'https://cors-anywhere.herokuapp.com';

const OPEN_WEATHER_MAP_API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const ROOT_URL = `${PROXY_URL}/${OPEN_WEATHER_MAP_API_URL}?appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(country, city) {
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
