import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoLab from './Components/CoLab'; // Adjust the import path according to your project structure
import './App.css'; // Assuming you have some general styles for your app
import About from './Components/Pages/About';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Contact from './Components/Pages/Contact';
import Maintenance from './Components/Maintenance';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<CoLab />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Maintenance />}/>
          {/* Add more Route components here for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
