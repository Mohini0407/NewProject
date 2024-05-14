import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../Images/r.jpg';
import './Product.css';

const Products = () => {
  // Sample product data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock product data with policy-related information
    const sampleProducts = [
      { id: 1, name: 'Health Insurance', description: 'Get comprehensive health coverage for you and your family. Ensure financial security against medical expenses.', image: 'Image' },
      { id: 2, name: 'Life Insurance', description: 'Secure your family\'s future with life insurance. Provide financial protection in case of unforeseen events.', image: 'life_insurance.jpg' },
      { id: 3, name: 'Auto Insurance', description: 'Protect your vehicle against damages, theft, and liabilities. Choose the right coverage for your car.', image: 'auto_insurance.jpg' },
      { id: 4, name: 'Home Insurance', description: 'Safeguard your home and belongings from risks like fire, theft, and natural disasters. Ensure peace of mind with home insurance.', image: 'home_insurance.jpg' },
      { id: 5, name: 'Travel Insurance', description: 'Stay protected during your travels with comprehensive travel insurance. Cover medical emergencies, trip cancellations, and more.', image: 'travel_insurance.jpg' }
    ];

    setProducts(sampleProducts);
  }, []);

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='products-container' id='product'>
      <h2 className='p'>Policy Products</h2>
      {/* Slider component */}
      <Slider {...settings}>
        {/* Mapping product data to create product cards */}
        {products.map(product => (
          <div key={product.id} className='product-card-wrapper'>
            <Card className='product-card'>
              <div className='product-image'>
                <img src={product.image} alt={product.name} />
              </div>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <button>More</button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
      
    </div>
    
  );
};

export default Products;
