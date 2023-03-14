import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Properties from './components/Properties';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='routing'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/properties' element={<Properties />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
