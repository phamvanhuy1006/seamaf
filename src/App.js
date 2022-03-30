import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Banner from './Body/Banner.js'
import Login from './Component/Login';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      <Footer/>
      </BrowserRouter>,
    </React.Fragment>
  );
}

export default App;
