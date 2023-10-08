import DashboardBlock from "./DashboardBlock"
import Item from "./Item"


function WeeksWeather() {
  return (
    <DashboardBlock type="bottom" value="7-Day Weather Forecast">
      <ul className="flex justify-between">
      <Item/>
      </ul>
    </DashboardBlock>
  )
}

export default WeeksWeather
