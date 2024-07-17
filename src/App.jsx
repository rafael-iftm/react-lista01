// src/App.jsx
import React from 'react';
import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import Footer from './components/layout/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
