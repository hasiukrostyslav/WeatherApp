import CurrentWeather from './CurrentWeather';
// import DashboardBlock from './DashboardBlock';
// import Error from './Error';

import WeeksWeather from './WeeksWeather';

function Dashboard() {
  return (
    <section className="relative h-4/5">
      <CurrentWeather />
      <WeeksWeather />

      {/* <DashboardBlock type="top">
        <Error />
      </DashboardBlock> */}
    </section>
  );
}

export default Dashboard;
