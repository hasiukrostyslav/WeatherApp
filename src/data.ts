export const WEATHER_TYPES = {
  0: 'Clear sky',
  1: 'Cloudy',
  2: 'Cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Freezing Drizzle',
  56: 'Freezing Drizzle',
  57: 'Freezing Drizzle',
  66: 'Freezing Drizzle',
  67: 'Freezing Drizzle',
  51: 'Drizzle',
  53: 'Drizzle',
  55: 'Drizzle',
  61: 'Rain',
  63: 'Rain',
  65: 'Rain',
  80: 'Rain showers',
  81: 'Rain showers',
  82: 'Rain showers',
  71: 'Snow',
  73: 'Snow',
  75: 'Snow',
  77: 'Snow',
  85: 'Snow',
  86: 'Snow',
  95: 'Thunderstorm',
  96: 'Thunderstorm',
  99: 'Thunderstorm',
  100: 'Clear night',
  101: 'Overcast',
  102: 'Rain',
};

export const BASE_URL_COORDS = 'https://geocoding-api.open-meteo.com/v1/search';
export const BASE_URL_WEATHER = 'https://api.open-meteo.com/v1/forecast';

export const WEATHER_URL_PARAMS =
  'current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode,surface_pressure,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=Europe%2FMoscow&forecast_days=14';

export const DAYS = {
  0: 'SUN',
  1: 'MON',
  2: 'TUE',
  3: 'WED',
  4: 'THU',
  5: 'FRI',
  6: 'SAT',
};
