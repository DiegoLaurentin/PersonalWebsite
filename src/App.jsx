import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter, Link } from 'react-router-dom';

import HashRoutes from './routes/HashRoutes';

//ROUTES
import Home from './views/Home';
import BusquedaTrabajo from './views/blog/BusquedaTrabajo.jsx';

function App() {
  return (

    <div>
      <HashRouter>
        <nav>
          <Link to="/busqueda-trabajo-certificaciones-ai-ml"/>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/busqueda-trabajo-certificaciones-ai-ml" element={<BusquedaTrabajo />} />
        </Routes>

      </HashRouter>

    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/busqueda-trabajo-certificaciones-ai-ml" element={<BusquedaTrabajo />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
