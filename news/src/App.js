import Noticias from './components/Noticias'
import './App.css';

function App() {
  return (
    // Fragment, usado para unir elementos
    <>
    <header className='d-flex justify-content-between align-items-center p-4 menu'>
      <a href="/" className='text-dark'>Assine</a>
      <h1><a href="/" className='text-dark'>SóNotícia</a></h1>
      <a href="/" className='text-dark'>Login</a>
    </header>

    <main>
      <Noticias/>
    </main>
    </>
  );
}

export default App;