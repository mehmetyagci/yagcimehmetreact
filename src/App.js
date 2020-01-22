import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import BlogPost from './pages/BlogPost';

function App () {
  return (
    <div className="App">
      <Header />
      {/*<Home />*/}
      <BlogPost />
      <Footer />
    </div>
  );
}

export default App;
