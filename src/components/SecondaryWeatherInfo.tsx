import { useTypedSelector } from '../hooks/useTypedSelector';
import { TbSunrise, TbSunset } from 'react-icons/tb';
import { getFormatTime } from '../helper';

import SunIndexes from './SunIndexes';
import WeatherIndexesList from './WeatherIndexesList';

function SecondaryWeatherInfo() {
  const { apparentTemperature, sunrise, sunset } = useTypedSelector(
    (state) => state.weather
  );
  return (
    <div className="md:mr-20">
      <p className="text-sky-700 dark:text-sky-500 text-lg mb-4">
        Feels like {apparentTemperature}
        <sup>°</sup>
      </p>
      <div className="flex mb-6 gap-5">
        <SunIndexes
          icon={<TbSunrise />}
          type="Sunrise"
          time={sunrise ? getFormatTime(sunrise) : ''}
        />
        <SunIndexes
          icon={<TbSunset />}
          type="Sunset"
          time={sunset ? getFormatTime(sunset) : ''}
        />
      </div>
      <WeatherIndexesList />
    </div>
  );
}

export default SecondaryWeatherInfo;
