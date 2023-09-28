import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Livres from './Pages/Livres';
import BarreNavigation from './Composants/Navbar';
import "/Users/abdallah/mini_projet_react/src/App.css";

function App() {
  return (
    <Router>
      <BarreNavigation />
      <Routes>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/livres" element={<Livres/>} />
      </Routes>
    </Router>
  );
}

export default App;
