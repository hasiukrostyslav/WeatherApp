type DailyWeather = {
  days: string[];
  weatherCode: number[];
};

export interface InitialState {
  status: 'idle' | 'loading' | 'error' | 'active';
  locationName: string;
  lat: number | null;
  lng: number | null;
  temperature: null | number;
  apparentTemperature: null | number;
  weatherCode: null | number;
  sunrise: string;
  sunset: string;
  humidity: null | number;
  windSpeed: null | number;
  pressure: null | number;
  uvIndex: null | number;
  isDay: boolean;
  dailyWeather: DailyWeather | null;
}

export enum ActionType {
  WEATHER_LOADING = 'weather/loading',
  WEATHER_COORDS = 'weather/coords',
  WEATHER_SUCCESS = 'weather/success',
  WEATHER_ERROR = 'weather/error',
}

interface WeatherLoadingAction {
  type: ActionType.WEATHER_LOADING;
}

interface WeatherCoordsAction {
  type: ActionType.WEATHER_COORDS;
  payload: {
    locationName: string;
    latitude: number;
    longitude: number;
  };
}

interface WeatherSuccessAction {
  type: ActionType.WEATHER_SUCCESS;
  payload: {
    temperature: number;
    apparentTemperature: number;
    weatherCode: number;
    sunrise: string;
    sunset: string;
    humidity: number;
    windSpeed: number;
    pressure: number;
    uvIndex: number;
    isDay: boolean;
    dailyWeather: DailyWeather;
  };
}

interface WeatherErrorAction {
  type: ActionType.WEATHER_ERROR;
}

export type WeatherActions =
  | WeatherLoadingAction
  | WeatherCoordsAction
  | WeatherErrorAction
  | WeatherSuccessAction;
