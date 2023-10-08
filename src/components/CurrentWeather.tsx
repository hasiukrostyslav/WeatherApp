import DashboardBlock from "./DashboardBlock"
import {BsFillCloudDrizzleFill, BsSpeedometer2, BsWind, BsWater} from 'react-icons/bs'
import {TbUvIndex, TbSunrise, TbSunset} from 'react-icons/tb'

function CurrentWeather() {


  return (
    <DashboardBlock type="top" value="Current Weather">
      <div className="flex px-5 pb-8 pt-5 gap-44">
        <div className="pr-9">
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
            <div className="flex gap-3 items-center">
              <span className="text-3xl text-gray-400"><TbSunrise/></span>
              <p className="flex flex-col">
                <span className="text-gray-400 font-medium text-sm">Sunrise</span>
                <span className="text-sky-600 font-medium text-sm">07:35</span>
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <span className="text-3xl text-gray-400"><TbSunset/></span>
              <p className="flex flex-col">
                <span className="text-gray-400 font-medium text-sm">Sunset</span>
                <span className="text-sky-600 font-medium text-sm">18:48</span>
              </p>
            </div>
            
          </div>


          <div className="flex items-center mb-2">
            <span className="text-gray-400"><BsWater/></span>
            <p className="text-gray-400 ml-3 font-medium w-20 text-sm">Humidity</p>
            <p className="text-sky-600 text-sm font-medium">84%</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-400"><BsWind/></span>
            <p className="text-gray-400 ml-3 font-medium w-20 text-sm">Wind</p>
            <p className="text-sky-600 text-sm font-medium">8kph</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-400"><BsSpeedometer2/></span>
            <p className="text-gray-400 ml-3 font-medium w-20 text-sm">Pressure</p>
            <p className="text-sky-600 text-sm font-medium">1017hPa</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-400"><TbUvIndex/></span>
            <p className="text-gray-400 ml-3 font-medium w-20 text-sm">UV Index</p>
            <p className="text-sky-600 text-sm font-medium">3</p>
          </div>
        </div>
      </div>
      
    </DashboardBlock>
  )
}

export default CurrentWeather
