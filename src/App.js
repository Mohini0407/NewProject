import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import Home from './Components/Home'; 
import Services from './Components/Services';
import Products from './Components/Products';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Plans from './Components/Plans';
import Footer from './Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
