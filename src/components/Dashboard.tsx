import CurrentWeather from './CurrentWeather';
import WeeksWeather from './WeeksWeather';
import Error from './Error';
import Loading from './Loading';

function Dashboard() {
  return (
    <section className="relative h-4/5">
      <CurrentWeather />
      <WeeksWeather />
      {/* <Loading /> */}
      {/* <Error /> */}
    </section>
  );
}

export default Dashboard;
