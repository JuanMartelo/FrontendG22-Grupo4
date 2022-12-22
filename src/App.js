import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import CompRutas  from './configuracion/Rutas';
import CompNavbar from './configuracion/Navbar';
import CompFooter from './configuracion/Footer';


function App() {
  return (
    <div className="App">
          <Router>
          
          <CompNavbar />
          <CompRutas />
          <CompFooter />
          </Router>
      

    </div>
  );
}

export default App;
