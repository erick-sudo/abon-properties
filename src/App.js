import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='h-screen border bg-sky-700'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
