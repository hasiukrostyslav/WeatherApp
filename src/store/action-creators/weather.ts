import { Dispatch } from 'redux';
import { ActionType, WeatherActions } from '../types/types';
import { getCapitalLocation } from '../../helper';
import {
  BASE_URL_COORDS,
  BASE_URL_WEATHER,
  WEATHER_URL_PARAMS,
} from '../../data';

export function fetchWeather(location: string) {
  return async (dispatch: Dispatch<WeatherActions>) => {
    try {
      dispatch({ type: ActionType.WEATHER_LOADING });

      const resCoords = await fetch(
        `${BASE_URL_COORDS}?name=${location}&count=10&language=en&format=json`
      );
      const cityInfo = await resCoords.json();

      const { latitude, longitude } = cityInfo.results.at(0);
      const locationName = getCapitalLocation(location);
      dispatch({
        type: ActionType.WEATHER_COORDS,
        payload: { locationName, latitude, longitude },
      });

      const resWeather = await fetch(
        `${BASE_URL_WEATHER}?latitude=${latitude}&longitude=${longitude}&${WEATHER_URL_PARAMS}`
      );

      const data = await resWeather.json();

      setTimeout(() => {
        dispatch({
          type: ActionType.WEATHER_SUCCESS,
          payload: {
            temperature: data.current.temperature_2m,
            apparentTemperature: data.current.apparent_temperature,
            weatherCode: data.current.weathercode,
            sunrise: data.daily.sunrise.at(0),
            sunset: data.daily.sunset.at(0),
            humidity: data.current.relativehumidity_2m,
            windSpeed: data.current.windspeed_10m,
            pressure: data.current.surface_pressure,
            uvIndex: data.daily.uv_index_max.at(0),
            isDay: Boolean(data.current.is_day),
            dailyWeather: {
              days: data.daily.time.slice(1, 8),
              weatherCode: data.daily.weathercode.slice(1, 8),
            },
          },
        });
      }, 500);
    } catch (err) {
      dispatch({ type: ActionType.WEATHER_ERROR });
    }
  };
}
