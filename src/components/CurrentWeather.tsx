import DashboardBlock from './DashboardBlock';
import MainWeatherInfo from './MainWeatherInfo';
import SecondaryWeatherInfo from './SecondaryWeatherInfo';

function CurrentWeather() {
  return (
    <DashboardBlock type="top" value="Current Weather">
      <div className="flex flex-col md:flex-row px-5 pb-8 pt-5 items-center gap-8 lg:justify-between">
        <MainWeatherInfo />
        <SecondaryWeatherInfo />
      </div>
    </DashboardBlock>
  );
}

export default CurrentWeather;
