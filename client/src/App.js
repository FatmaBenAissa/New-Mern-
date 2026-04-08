
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Male from './components/Male';
import Female from './components/Female';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { getproducts } from './redux/productslice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
function App() {
  const dispatch=useDispatch();
  const [ping, setping] = useState(false)
  useEffect(() => {
    dispatch(getproducts());
  }, [ping, dispatch])
  
  return (
    <div className="App">
    <Navbarr/>
     <Routes>
        <Route path="/" element={ <Home ping={ping} setping={setping}/> } />
        <Route path="/female" element={ <Female ping={ping} setping={setping}/> } />
        <Route path="/male" element={ <Male ping={ping} setping={setping}/> } />
      </Routes>
    </div>
  );
}

export default App;
