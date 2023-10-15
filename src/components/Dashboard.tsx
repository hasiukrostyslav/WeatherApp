import { useTypedSelector } from '../hooks/useTypedSelector';
import CurrentWeather from './CurrentWeather';
import DashboardBlock from './DashboardBlock';
import Error from './Error';

import WeeksWeather from './WeeksWeather';

function Dashboard() {
  const status = useTypedSelector((state) => state.status);
  return (
    <section className="relative h-4/5">
      {status === 'active' && (
        <>
          <CurrentWeather />
          <WeeksWeather />
        </>
      )}

      {status === 'error' && (
        <DashboardBlock type="top">
          <Error />
        </DashboardBlock>
      )}
    </section>
  );
}

export default Dashboard;
