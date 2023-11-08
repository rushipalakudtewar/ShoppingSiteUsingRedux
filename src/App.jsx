import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='bg-violet-800 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <div className='bg-violet-800 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
