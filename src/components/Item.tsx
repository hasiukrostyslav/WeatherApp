import {BsFillCloudDrizzleFill} from 'react-icons/bs'

function Item() {
  return (
    <li className="flex flex-col gap-2">
          <div className="flex items-center justify-center flex-col gap-2">
            <p className="text-lg text-sky-600 font-semibold">Sun</p>
            <span className="text-7xl">
              <BsFillCloudDrizzleFill/>
            </span>
          </div>
          <div className="flex items-center justify-center flex-col">
          <p className="text-sky-700 text-lg font-semibold">Rain</p>
          <p className="text-sky-700 text-lg">18<sup>°</sup>/8<sup>°</sup></p>
          </div>
        </li>
  )
}

export default Item
