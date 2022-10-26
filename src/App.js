import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home';
import Photos from './pages/Photos';
import './App.css';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
    </Router>
  );
}
