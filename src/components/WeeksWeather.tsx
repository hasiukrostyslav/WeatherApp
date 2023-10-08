import DashboardBlock from './DashboardBlock';
import Item from './Item';

function WeeksWeather() {
  return (
    <DashboardBlock type="bottom" value="7-Day Weather Forecast">
      <ul className="flex flex-col md:flex-row justify-between gap-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </DashboardBlock>
  );
}

export default WeeksWeather;
