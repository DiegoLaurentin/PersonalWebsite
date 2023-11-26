import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//ROUTES
import Home from './views/Home';
import BusquedaTrabajo from './views/blog/BusquedaTrabajo';
import LinearRegression from './views/blog/LinearRegresion/LinearRegression';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busqueda-trabajo-certificaciones-ai-ml" element={<BusquedaTrabajo />} />
        <Route path="/regresion-lineal" element={<LinearRegression />} />
      </Routes>
    </Router>
  );
}

export default App;