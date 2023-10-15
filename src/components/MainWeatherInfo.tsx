import { useTypedSelector } from '../hooks/useTypedSelector';
import { WEATHER_TYPES } from '../data';
import WeatherIcon from './WeatherIcon';

function MainWeatherInfo() {
  const { locationName, temperature, weatherCode } = useTypedSelector(
    (state) => state.weather
  );

  return (
    <div className="md:mr-20">
      <p className="text-xl text-sky-600 dark:text-sky-400 font-semibold">
        {locationName}
      </p>
      <div className="flex items-center mt-4 mb-3 gap-7">
        <div className="text-7xl text-sky-500">
          <WeatherIcon code={weatherCode} />
        </div>
        <p className="text-9xl font-thin text-sky-600 dark:text-sky-400">
          {temperature}
          <sup>°</sup>
        </p>
      </div>
      <p className="text-xl text-sky-700 dark:text-sky-500 font-bold">
        {WEATHER_TYPES[weatherCode as keyof typeof WEATHER_TYPES]}
      </p>
    </div>
  );
}

export default MainWeatherInfo;
