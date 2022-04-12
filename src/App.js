import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import React from 'react';
import {
  Outlet
} from "react-router-dom";

function App() {
  const arr=[1,2,3]
  return (
    <React.Fragment>
      <Header/>
      <Outlet/>       
      <Footer/>
    </React.Fragment>
  );
}

export default App;
