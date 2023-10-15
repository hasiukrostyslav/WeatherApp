import { Dispatch } from 'redux';
import { ActionType, Location, WeatherActions } from '../types/types';
import { getCapitalLocation, formatDailyWeather } from '../../helper';
import {
  BASE_URL_COORDS,
  BASE_URL_WEATHER,
  WEATHER_URL_PARAMS,
} from '../../data';

export function fetchWeather(location: string | null, coords?: Location) {
  return async (dispatch: Dispatch<WeatherActions>) => {
    try {
      dispatch({ type: ActionType.WEATHER_LOADING });

      let latitude, longitude, locationName;

      if (location) locationName = getCapitalLocation(location);
      if (!location) {
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords?.latitude}&longitude=${coords?.longitude}`
        );
        const data = await res.json();
        locationName = getCapitalLocation(data.city);
      }

      if (!coords) {
        const resCoords = await fetch(
          `${BASE_URL_COORDS}?name=${location}&count=10&language=en&format=json`
        );
        const cityInfo = await resCoords.json();
        latitude = cityInfo.results.at(0).latitude;
        longitude = cityInfo.results.at(0).longitude;
        dispatch({
          type: ActionType.WEATHER_COORDS,
          payload: { locationName: locationName || '', latitude, longitude },
        });
      }

      if (coords) {
        latitude = coords.latitude;
        longitude = coords.longitude;
        dispatch({
          type: ActionType.WEATHER_COORDS,
          payload: { locationName: locationName || '', latitude, longitude },
        });
      }

      const resWeather = await fetch(
        `${BASE_URL_WEATHER}?latitude=${latitude}&longitude=${longitude}&${WEATHER_URL_PARAMS}`
      );

      const data = await resWeather.json();
      const { current, daily } = data;

      setTimeout(() => {
        dispatch({
          type: ActionType.WEATHER_SUCCESS,
          payload: {
            temperature: Number.parseInt(current.temperature_2m),
            apparentTemperature: Number.parseInt(current.apparent_temperature),
            weatherCode: current.weathercode,
            humidity: current.relativehumidity_2m,
            windSpeed: current.windspeed_10m,
            pressure: current.surface_pressure,
            isDay: Boolean(current.is_day),
            sunrise: new Date(daily.sunrise.at(0)),
            sunset: new Date(daily.sunset.at(0)),
            uvIndex: daily.uv_index_max.at(0),
            dailyWeather: formatDailyWeather(daily),
          },
        });
      }, 500);
    } catch (err) {
      dispatch({ type: ActionType.WEATHER_ERROR });
    }
  };
}
