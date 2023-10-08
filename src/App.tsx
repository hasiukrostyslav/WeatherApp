import Container from './components/Container';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <Container>
      <Header />
      <SearchForm />
      <Dashboard />
    </Container>
  );
}

export default App;

