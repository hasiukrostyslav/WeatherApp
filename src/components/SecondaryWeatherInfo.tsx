import { useTypedSelector } from '../hooks/useTypedSelector';
import { BsSpeedometer2, BsWind, BsWater } from 'react-icons/bs';
import { TbUvIndex, TbSunrise, TbSunset } from 'react-icons/tb';
import { getFormatTime } from '../helper';
import WeatherIndexes from './WeatherIndexes';
import SunIndexes from './SunIndexes';

function SecondaryWeatherInfo() {
  const {
    apparentTemperature,
    sunrise,
    sunset,
    humidity,
    windSpeed,
    pressure,
    uvIndex,
  } = useTypedSelector((state) => state.weather);
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
  );
}

export default SecondaryWeatherInfo;
