import { BsSpeedometer2, BsWind, BsWater } from 'react-icons/bs';
import { TbUvIndex, TbSunrise, TbSunset } from 'react-icons/tb';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { WEATHER_TYPES } from '../data';
import { getFormatTime } from '../helper';
import DashboardBlock from './DashboardBlock';
import WeatherIndexes from './WeatherIndexes';
import SunIndexes from './SunIndexes';
import WeatherIcon from './WeatherIcon';

function CurrentWeather() {
  // prettier-ignore
  const { locationName, temperature, weatherCode, apparentTemperature, sunrise, sunset, humidity, windSpeed, pressure, uvIndex } = useTypedSelector((state) => state.weather);

  return (
    <DashboardBlock type="top" value="Current Weather">
      <div className="flex flex-col md:flex-row px-5 pb-8 pt-5 items-center gap-8 lg:justify-between">
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

          <WeatherIndexes
            icon={<BsWater />}
            keyIndex="Humidity"
            value={`${humidity}%`}
          />
          <WeatherIndexes
            icon={<BsWind />}
            keyIndex="Wind"
            value={`${windSpeed}kph`}
          />
          <WeatherIndexes
            icon={<BsSpeedometer2 />}
            keyIndex="Pressure"
            value={`${pressure}hPa`}
          />
          <WeatherIndexes
            icon={<TbUvIndex />}
            keyIndex="UV Index"
            value={`${uvIndex}`}
          />
        </div>
      </div>
    </DashboardBlock>
  );
}

export default CurrentWeather;
