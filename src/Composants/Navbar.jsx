import React from "react";

import { Link} from 'react-router-dom';
import './Navbar.css';

 function BarreNavigation  ()  {
  
  return (
    <div className="navbar">
      <nav >
        <ul>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/livres'>Livres</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default BarreNavigation;
