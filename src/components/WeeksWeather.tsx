import { useTypedSelector } from '../hooks/useTypedSelector';
import DashboardBlock from './DashboardBlock';
import Item from './Item';

function WeeksWeather() {
  const { dailyWeather } = useTypedSelector((state) => state.weather);

  return (
    <DashboardBlock type="bottom" value="7-Day Weather Forecast">
      <ul className="flex flex-col md:flex-row justify-between lg:gap-4 ">
        {dailyWeather?.map((date) => (
          <Item
            key={date.day}
            day={date.day}
            code={date.weatherCode}
            maxTemp={date.maxTemperature}
            minTemp={date.minTemperature}
          />
        ))}
      </ul>
    </DashboardBlock>
  );
}

export default WeeksWeather;
