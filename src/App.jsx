import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import Models from './Models'
import Bespoke from './Bespoke'
import Racing from './Racing'
import Ownership from './Ownership'
import About from './About'

function App(){

  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'models':
        return <Models />;
      case 'bespoke':
        return <Bespoke />;
      case 'racing':
        return <Racing />;
      case 'ownership':
        return <Ownership />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
    </>
  );
}

export default App
