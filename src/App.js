import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';

function App () {
  return (
    <div className="App">
      <Header />
       <Home />
       <About /> 
       <Contact /> 
       <BlogPost /> 
      <Footer />
    </div>
  );
}

export default App;
