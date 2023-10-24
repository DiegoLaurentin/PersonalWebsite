import Home from '../views/Home';
import BusquedaTrabajo from '../views/blog/busquedaTrabajo.jsx';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/busqueda-trabajo-certificaciones-ai-ml/',
    element: <BusquedaTrabajo />,
  },
];

export default routes;