import WeatherIcon from './WeatherIcon';

interface ItemProps {
  day: string;
  code: number;
  maxTemp: number;
  minTemp: number;
}

function Item({ day, code, maxTemp, minTemp }: ItemProps) {
  return (
    <li className="flex items-center justify-center flex-col gap-2">
      <p className="text-lg text-sky-600 dark:text-sky-400 font-semibold">
        {day}
      </p>
      <span className="text-7xl text-sky-600">
        <WeatherIcon code={code} />
      </span>
      <p className="text-sky-700 dark:text-sky-500 text-lg">
        {maxTemp}
        <sup>°</sup>/{minTemp}
        <sup>°</sup>
      </p>
    </li>
  );
}

export default Item;
