import React from 'react';
import Home from './containers/Home/Home';
import './App.css'
import Header from './components/Header/Header';
import Contact from './containers/ContactUs/Contact';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './containers/Post/Post';

function App() {
  return (
    <Router>

<div className="App">
    <Header />
    <Hero />
    
    <Routes>
    <Route path="" exact element={<Home/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post" element={<Post />} />
   </Routes>
  </div>

    </Router>
   
   
  );
}

export default App;
