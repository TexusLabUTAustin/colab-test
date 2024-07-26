import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoLab from './Components/CoLab'; // Adjust the import path according to your project structure
import './App.css'; // Assuming you have some general styles for your app
import About from './Components/Pages/About';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<CoLab />}/>
          <Route path="/about" element={<About />}/>
          {/* Add more Route components here for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
