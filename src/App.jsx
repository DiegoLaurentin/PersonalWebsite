import React from 'react';
import { Routes, Route, HashRouter, Link } from 'react-router-dom';

//ROUTES
import Home from './views/Home';
import BusquedaTrabajo from './views/blog/BusquedaTrabajo';
import LinearRegression from './views/blog/LinearRegresion/LinearRegression';

function App() {
  return (
    <HashRouter>
      <Link to="/busqueda-trabajo-certificaciones-ai-ml" />
      <Link to="/regresion-lineal" />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/busqueda-trabajo-certificaciones-ai-ml" element={<BusquedaTrabajo />} />
        <Route exact path="/regresion-lineal" element={<LinearRegression />} />
      </Routes>

    </HashRouter>

  );
}

export default App;
