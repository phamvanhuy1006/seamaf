import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Body/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
