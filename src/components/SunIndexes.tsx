type SunIndexesProps = {
  icon: React.ReactNode;
  type: 'Sunset' | 'Sunrise';
  time: string;
};

function SunIndexes({ icon, type, time }: SunIndexesProps) {
  return (
    <div className="flex gap-3 items-center">
      <span className="text-3xl text-gray-500 dark:text-gray-400">{icon}</span>
      <p className="flex flex-col">
        <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">
          {type}
        </span>
        <span className="text-sky-600 dark:text-sky-400 font-medium text-sm">
          {time}
        </span>
      </p>
    </div>
  );
}

export default SunIndexes;
