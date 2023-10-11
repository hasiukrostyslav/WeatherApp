import WeatherIcon from './WeatherIcon';

function Item() {
  return (
    <li className="flex items-center justify-center flex-col gap-2">
      <p className="text-lg text-sky-600 dark:text-sky-400 font-semibold">
        Sun
      </p>
      <span className="text-7xl text-sky-600">
        <WeatherIcon code={71} />
      </span>
      <p className="text-sky-700 dark:text-sky-500 text-lg">
        18<sup>°</sup>/8<sup>°</sup>
      </p>
    </li>
  );
}

export default Item;
