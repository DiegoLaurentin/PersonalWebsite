import React, { useEffect, useState } from 'react';
import "../App.css"

import TopBar from './global/Topbar';

function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    // Actualiza el estado de windowWidth cuando cambia el ancho de la ventana
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div className="h-screen bg-black relative">
        <TopBar />
        <div className="flex items-center justify-center h-full">
          <div className={`w-max ${windowWidth <= 768 ? 'text-3xl' : 'text-6xl'}`}>
            <h1 className="text-white font-medium animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5">Próximamente...</h1>
          </div>
        </div>
      </div>
    );
  }

export default Home