import React, { useState } from 'react';
import Services from './Services';
import AboutUs from './AboutUs';
import Products from './Products';
import ContactUs from './ContactUs';
import yourImage from '../Images/hand-adding-coins-stack-covered-dirt-plants_23-2148803907.avif';
import '../AllCss/Home.css'

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showTermForm, setShowTermForm] = useState(false);
  const [showSavingForm, setShowSavingForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    setShowTermForm(false); // Hide term form
    setShowSavingForm(false); // Hide saving form
  };

  const toggleTermForm = () => {
    setShowTermForm(!showTermForm);
    setShowContactForm(false); // Hide contact form
    setShowSavingForm(false); // Hide saving form
  };

  const toggleSavingForm = () => {
    setShowSavingForm(!showSavingForm);
    setShowContactForm(false); // Hide contact form
    setShowTermForm(false); // Hide term form
  };

  return (
    <div className='page' id="home">
      <div className='hero-section'>
        <div className='image-container'>
          <img src={yourImage} className='image' alt="Description of the image" />
          <div className='text-overlay'>
            <p>COMMITTED TO SUCCESS</p>
            <h1>We help to save your money.</h1>
          </div>
        </div>
      </div>

      <section className='services-section'>
        <Services />
      </section>

      <section className='about-us-section'>
        <AboutUs />
      </section>

      <section className='products-section'>
        <Products />
      </section>

      <section className='contact-us-section'>
        <ContactUs />
      </section>

      

      
      
    </div>
  );
};

export default Home;
