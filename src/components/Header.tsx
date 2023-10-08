import { LuSunMedium, LuMoonStar } from 'react-icons/lu';
import Button from './Button';

function Header() {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-3xl text-sky-900 font-medium">React Weather</h1>
     
      <Button useType='theme'><LuSunMedium /></Button>
    </header>
  );
}

export default Header;
