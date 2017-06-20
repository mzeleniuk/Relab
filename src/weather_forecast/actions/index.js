import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';

// NodeJS reverse proxy which adds CORS headers to the proxied request
// https://forum.freecodecamp.com/t/openweathermap-not-showing-on-github-pages-solved/101836
const PROXY_URL= 'https://cors-anywhere.herokuapp.com';

const ROOT_URL = `${PROXY_URL}/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ua`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
