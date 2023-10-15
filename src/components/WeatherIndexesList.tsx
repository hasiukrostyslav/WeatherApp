import { BsSpeedometer2, BsWind, BsWater } from 'react-icons/bs';
import { TbUvIndex } from 'react-icons/tb';
import { useTypedSelector } from '../hooks/useTypedSelector';
import WeatherIndexes from './WeatherIndexes';
function WeatherIndexesList() {
  const { humidity, windSpeed, pressure, uvIndex, isDay } = useTypedSelector(
    (state) => state.weather
  );
  return (
    <>
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
        value={isDay ? `${uvIndex}` : '0'}
      />
    </>
  );
}

export default WeatherIndexesList;
