type WeatherIndexesProps = {
  icon: React.ReactNode;
  keyIndex: 'Humidity' | 'Wind' | 'Pressure' | 'UV Index';
  value: string;
};

function WeatherIndexes({ icon, keyIndex, value }: WeatherIndexesProps) {
  return (
    <div className="flex items-center mb-2">
      <span className="text-gray-500 dark:text-gray-400">{icon}</span>
      <span className="text-gray-500 dark:text-gray-400 ml-3 font-medium w-20 text-sm">
        {keyIndex}
      </span>
      <span className="text-sky-600 dark:text-sky-400 text-sm font-medium">
        {value}
      </span>
    </div>
  );
}

export default WeatherIndexes;
