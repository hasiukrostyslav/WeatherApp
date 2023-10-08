import { useEffect, useState } from 'react';
import Container from './components/Container';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Image from './components/Image';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (
      theme === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <Container>
        <Header theme={theme} setTheme={setTheme} />
        <SearchForm />
        <Dashboard />
      </Container>
      <Image theme={theme} />
    </>
  );
}

export default App;
