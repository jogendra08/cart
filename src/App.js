import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Cartpage from './components/Cartpage';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Card/>}/>
        <Route path="/cart" element={<Cartpage/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
