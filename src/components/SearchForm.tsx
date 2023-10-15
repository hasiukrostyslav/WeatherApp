import { useState } from 'react';
import { IoSearchOutline, IoLocateOutline } from 'react-icons/io5';
import { useAction } from '../hooks/useAction';
import Button from './Button';
import { Location } from '../store/types/types';

function SearchForm() {
  const [locationName, setLocationName] = useState<string>('');
  const [coordinates, setCoordinates] = useState<Location>();
  const { fetchWeather } = useAction();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!locationName) return;

    fetchWeather(locationName);
    setLocationName('');
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition((pos) => {
      const { coords } = pos;

      setCoordinates({
        ...coordinates,
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    });

    fetchWeather(null, coordinates);
    setLocationName('');
  }

  return (
    <form className="relative mb-6" onSubmit={handleSubmit}>
      <Button type="submit" useType="search">
        <IoSearchOutline />
      </Button>

      <input
        className="w-full px-10 py-2.5 rounded-3xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-500  focus:outline-none focus:ring focus:ring-sky-700"
        placeholder="Search for location"
        value={locationName}
        onChange={(e) => setLocationName(e.target.value)}
      ></input>

      <Button type="button" useType="location" onClick={handleClick}>
        <IoLocateOutline />
      </Button>
    </form>
  );
}

export default SearchForm;
