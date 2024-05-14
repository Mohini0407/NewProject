import React from 'react';
import '../AllCss/AboutUs.css';
import About from '../Images/istockphoto-1047549194-612x612.jpg';


const AboutUs = () => {
  return (
    <div className='about-us-container' id='about'>
      <div className='about-us-content'>
      <div className='about-us-image'>
         <img src={About} className='image1' alt="Description of the image" />
       </div>
        <div className='about-us-text'>
          <h2 className='About'>About Us</h2>
          <p>
            Welcome to OurMutualFund.com, your trusted partner for all your mutual fund investments. We are committed to helping you achieve your financial goals by providing expert advice, personalized recommendations, and a wide range of investment options.
          </p>
          <p>
            Our team of experienced financial advisors is dedicated to guiding you through every step of your investment journey. Whether you're a seasoned investor or new to mutual funds, we're here to help you make informed decisions and maximize your returns.
          </p>
          
          <p>
            Thank you for choosing OurMutualFund.com. Start investing today and secure a brighter financial future!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
