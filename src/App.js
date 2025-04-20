import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ErrorBoundary>
      <Navigation />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;