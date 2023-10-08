import { LuSunMedium, LuMoonStar } from 'react-icons/lu';
import Button from './Button';

type HeaderProps = {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

function Header({ theme, setTheme }: HeaderProps) {
  function handleThemeSwitch() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-3xl text-sky-900 dark:text-sky-400 font-medium">
        React Weather
      </h1>

      <Button onClick={handleThemeSwitch} useType="theme">
        {theme === 'light' ? <LuSunMedium /> : <LuMoonStar />}
      </Button>
    </header>
  );
}

export default Header;
