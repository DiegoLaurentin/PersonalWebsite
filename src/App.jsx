import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//ROUTES
import Home from './views/Home';
import BusquedaTrabajo from './views/blog/BusquedaTrabajo.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Home />} />
        <Route path="/busqueda-trabajo" element={<BusquedaTrabajo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
