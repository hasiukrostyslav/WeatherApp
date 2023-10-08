import {BsFillCloudDrizzleFill, BsSpeedometer2, BsWind, BsWater} from 'react-icons/bs'
import {TbUvIndex, TbSunrise, TbSunset} from 'react-icons/tb'
import DashboardBlock from "./DashboardBlock"
import WeatherIndexes from "./WeatherIndexes"
import SunIndexes from "./SunIndexes"

function CurrentWeather() {


  return (
    <DashboardBlock type="top" value="Current Weather">
      <div className="flex px-5 pb-8 pt-5 flex-wrap">
        <div className="pr-9 w-[400px]">
          <p className="text-lg text-sky-600 font-semibold">Lviv</p>
          <div className="flex items-center mt-4 mb-3 gap-7">
            <div className="text-7xl text-sky-500">
              <BsFillCloudDrizzleFill/>
            </div>
            <p className="text-9xl font-thin text-sky-600">20<sup>°</sup></p>
          </div>
          <p className="text-xl text-sky-700 font-bold">overcast clouds</p>
        </div>


        <div>
          <p className="text-sky-700 text-lg mb-4">Feels like 18<sup>°</sup></p>

          <div className="flex mb-6 gap-5">
            <SunIndexes icon={<TbSunrise/>} type="Sunrise" time="07:35"/>
            <SunIndexes icon={<TbSunset/>} type="Sunset" time="18:48"/>
          </div>

          <WeatherIndexes icon={<BsWater/>} keyIndex="Humidity" value="84%"/>
          <WeatherIndexes icon={<BsWind/>} keyIndex="Wind" value="23kph"/>         
          <WeatherIndexes icon={<BsSpeedometer2/>} keyIndex="Pressure" value="1017hPa"/>
          <WeatherIndexes icon={<TbUvIndex/>} keyIndex="UV Index" value="3"/>
        </div>
      </div>
      
    </DashboardBlock>
  )
}

export default CurrentWeather
