import { useTypedSelector } from '../hooks/useTypedSelector';
import { WEATHER_TYPES } from '../data';
import WeatherIcon from './WeatherIcon';

function MainWeatherInfo() {
  const { locationName, temperature, weatherCode, isDay } = useTypedSelector(
    (state) => state.weather
  );

  function selectDayType(isDay: boolean, weatherCode: number) {
    if (weatherCode === 0 && !isDay) return WEATHER_TYPES[100];
    else return WEATHER_TYPES[weatherCode as keyof typeof WEATHER_TYPES];
  }

  function selectDayIcon(isDay: boolean, weatherCode: number) {
    if (weatherCode === 0 && !isDay) return <WeatherIcon code={100} />;
    if ((weatherCode === 1 || weatherCode === 2 || weatherCode === 3) && !isDay)
      return <WeatherIcon code={101} />;
    if (
      (weatherCode === 61 || weatherCode === 63 || weatherCode === 65) &&
      !isDay
    )
      return <WeatherIcon code={102} />;
    else return <WeatherIcon code={weatherCode} />;
  }

  return (
    <div className="md:mr-20">
      <p className="text-xl text-sky-600 dark:text-sky-400 font-semibold">
        {locationName}
      </p>
      <div className="flex items-center mt-4 mb-3 gap-7">
        <div className="text-7xl text-sky-500">
          {isDay !== null &&
            weatherCode !== null &&
            selectDayIcon(isDay, weatherCode)}
        </div>
        <p className="text-9xl font-thin text-sky-600 dark:text-sky-400">
          {temperature}
          <sup>°</sup>
        </p>
      </div>
      <p className="text-xl text-sky-700 dark:text-sky-500 font-bold">
        {isDay !== null &&
          weatherCode !== null &&
          selectDayType(isDay, weatherCode)}
      </p>
    </div>
  );
}

export default MainWeatherInfo;
