import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home.jsx';
import Telemax from './pages/Telemax';
import Canal26 from './pages/Canal26';
import Latinatv from './pages/Latinatv';
import Musictop from './pages/Musictop';
import Tierramia from './pages/Tierramia';
import Tlcpreview from './pages/Tlcpreview';
import Cuatrok from './pages/Cuatrok.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/canal26" element={<Canal26 />} />
          <Route path="/latinatv" element={<Latinatv />} />
          <Route path="/telemax" element={<Telemax />} />
          <Route path="/musictop" element={<Musictop />} />
          <Route path="/tierramia" element={<Tierramia />} />
          <Route path="/tlcpreview" element={<Tlcpreview />} />
          <Route path="/cuatrok" element={<Cuatrok />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;