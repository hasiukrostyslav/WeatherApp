import { useState } from 'react';
import { IoSearchOutline, IoLocateOutline } from 'react-icons/io5';
import { useAction } from '../hooks/useAction';
import Button from './Button';

function SearchForm() {
  const [locationName, setLocationName] = useState<string>('');
  const { fetchWeather } = useAction();

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!locationName) return;

    fetchWeather(locationName);
    setLocationName('');
  }

  return (
    <form className="relative mb-6" onSubmit={submitHandler}>
      <Button type="submit" useType="search">
        <IoSearchOutline />
      </Button>

      <input
        className="w-full px-10 py-2.5 rounded-3xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-500  focus:outline-none focus:ring focus:ring-sky-700"
        placeholder="Search for location"
        value={locationName}
        onChange={(e) => setLocationName(e.target.value)}
      ></input>

      <Button useType="location">
        <IoLocateOutline />
      </Button>
    </form>
  );
}

export default SearchForm;
