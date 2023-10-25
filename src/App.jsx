import React from 'react';
import { Routes, Route, HashRouter, Link } from 'react-router-dom';

//ROUTES
import Home from './views/Home';
import BusquedaTrabajo from './views/blog/busquedaTrabajo';

function App() {
  return (
    <HashRouter>
      <Link to="/busqueda-trabajo-certificaciones-ai-ml" />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/busqueda-trabajo-certificaciones-ai-ml" element={<BusquedaTrabajo />} />
      </Routes>

    </HashRouter>

  );
}

export default App;
