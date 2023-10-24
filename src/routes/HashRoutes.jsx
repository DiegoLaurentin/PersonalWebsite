import React from 'react';
import { HashRouter, Link } from 'react-router-dom';


function HashRoutes() {
  return (
    <div className='pt-40'>
      <HashRouter>
        <nav>
          <Link to="/busqueda-trabajo-certificaciones-ai-ml"/>
        </nav>
      </HashRouter>
    </div>
  );
}

export default HashRoutes;
