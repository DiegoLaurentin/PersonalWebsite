import React from 'react';
import logotype from "../../assets/laurentin-positivo.png"

import Instagram from "../../assets/icons/Instagram.png"
import Github from "../../assets/icons/Github.png"
import Threads from "../../assets/icons/Threads.png"
import Twitter from "../../assets/icons/Twitter.png"
import LinkedIn from "../../assets/icons/LinkedIn.png"

function TopBar() {
    return (
        <div className="top-bar flex justify-between m-6" style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
            <div className="w-28">
                <a href="/"><img src={logotype} alt="Logo" /></a>
            </div>
            <div className='flex space-x-5'>
                <a href="https://github.com/DiegoLaurentin"><img src={Github} alt="" /></a>
                <a href="/busqueda-trabajo-certificaciones-ai-ml"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/diegolaurentin/"><img src={LinkedIn} alt="" /></a>

                <a href="https://www.instagram.com/diegolaurentin/"><img src={Instagram} alt="" /></a>
                <a href="https://twitter.com/diego_laurentin"><img src={Twitter} alt="" /></a>
                <a href="https://www.threads.net/@diegolaurentin"><img src={Threads} alt="" /></a>
            </div>
        </div>
    );
}

export default TopBar;