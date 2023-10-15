import { ActionType, InitialState, WeatherActions } from '../types/types';

const initialState: InitialState = {
  status: 'idle',
  locationName: '',
  lat: null,
  lng: null,
  temperature: null,
  apparentTemperature: null,
  weatherCode: null,
  sunrise: null,
  sunset: null,
  humidity: null,
  windSpeed: null,
  pressure: null,
  uvIndex: null,
  isDay: null,
  dailyWeather: null,
};

export default function weatherReducer(
  state: InitialState = initialState,
  action: WeatherActions
): InitialState {
  switch (action.type) {
    case ActionType.WEATHER_LOADING:
      return { ...state, status: 'loading' };

    case ActionType.WEATHER_COORDS:
      return {
        ...state,
        locationName: action.payload.locationName,
        lat: action.payload.latitude,
        lng: action.payload.longitude,
      };

    case ActionType.WEATHER_ERROR:
      return { ...initialState, status: 'error' };

    case ActionType.WEATHER_SUCCESS:
      return {
        ...state,
        status: 'active',
        temperature: action.payload.temperature,
        apparentTemperature: action.payload.apparentTemperature,
        weatherCode: action.payload.weatherCode,
        sunrise: action.payload.sunrise,
        sunset: action.payload.sunset,
        humidity: action.payload.humidity,
        windSpeed: action.payload.windSpeed,
        pressure: action.payload.pressure,
        uvIndex: action.payload.uvIndex,
        isDay: action.payload.isDay,
        dailyWeather: action.payload.dailyWeather,
      };

    default:
      return state;
  }
}
