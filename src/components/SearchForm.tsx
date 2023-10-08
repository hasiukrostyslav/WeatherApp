import {IoSearchOutline, IoLocateOutline} from 'react-icons/io5'
import Button from './Button';

function SearchForm() {
  return (
    <form className="relative mb-6">
      <Button type='submit' useType='search'><IoSearchOutline/></Button>

    <input
      className="w-full px-10 py-2.5 rounded-3xl bg-sky-100 text-sky-700  focus:outline-none focus:ring focus:ring-sky-700"
      placeholder="Search for location"
      ></input>
      
      <Button useType='location'><IoLocateOutline/></Button>
     </form>
  );
}

export default SearchForm;
