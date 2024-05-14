import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './Services.css';
import financialPlanningImage from '../Images/mf.jpg';
import investmentManagementImage from '../Images/stock.jpg';
import taxPlanningImage from '../Images/loan.jpg';
import retirementPlanningImage from '../Images/insurance.jpg';
import NewSaving from '../NewSaving';
import NewTerm from '../NewTerm';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);
  const [showTermForm, setShowTermForm] = useState(false);
  const [showSavingForm, setShowSavingForm] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const serviceData = [
    {
      title: 'Insurance',
      image: financialPlanningImage,
      alt: 'Financial Planning',
      types: [
        { name: 'Life Insurance', image: financialPlanningImage, description: 'Description for Type 1' },
        { name: 'Health Insurance', image: financialPlanningImage, description: 'Description for Type 2' },
        { name: 'General Insurance', image: financialPlanningImage, description: 'Description for Type 3' }
      ],
    },
    {
      title: 'Mutual Fund',
      image: investmentManagementImage,
      alt: 'Investment Management',
      types: [
        { name: 'Systematic Investment Plan', image: investmentManagementImage, description: 'Description for Stock Type 1' },
        { name: 'Lumpsum Mutual Fund', image: investmentManagementImage, description: 'Description for Stock Type 2' },
        { name: 'Balanced Fund', image: investmentManagementImage, description: 'Description for Stock Type 2' }
      ],
    },
    {
      title: 'Alternative Investment',
      image: taxPlanningImage,
      alt: 'Tax Planning',
      types: [
        { name: 'Portfolio Management System', image: taxPlanningImage, description: 'Description for Loan Type 1' },
        { name: 'Alternative Investment Fund', image: taxPlanningImage, description: 'Description for Loan Type 2' },
        { name: 'Land', image: taxPlanningImage, description: 'Description for Loan Type 3' }
      ],
    },
    {
      title: 'Loan',
      image: retirementPlanningImage,
      alt: 'Retirement Planning',
      types: [
        { name: 'Business Loan', image: retirementPlanningImage, description: 'Description for Insurance Type 1' },
        { name: 'Personal Loan', image: retirementPlanningImage, description: 'Description for Insurance Type 2' },
        { name: 'Hour Loan', image: retirementPlanningImage, description: 'Description for Insurance Type 3' }
      ],
    },
  ];

  const handleExploreClick = (service, type) => {
    setSelectedService(service.title);
    setSelectedServiceTypes(service.types);
    setSelectedType(type);
    setShowModal(true);
  };

  const toggleTermForm = () => {
    setShowTermForm(!showTermForm);
    setShowSavingForm(false); // Hide saving form
  };

  const toggleSavingForm = () => {
    setShowSavingForm(!showSavingForm);
    setShowTermForm(false); // Hide contact form
  };

  return (
    <div id='services'>
      <Container className="services-container">
        <h2 className="Text">Our Services</h2>

        <Row xs={1} md={2} lg={2} className="g-4">
          {serviceData.map((service, index) => (
            <Col key={index}>
              <Card className="service-card">
                <Card.Img variant="top" src={service.image} alt={service.alt} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Button onClick={() => handleExploreClick(service)} className="explore-button">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal to display service types */}
      <Modal show={showModal} onHide={() => setShowModal(false)} className='Modal'>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService} Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row xs={1} md={2} lg={3} className="g-4">
            {selectedServiceTypes.map((type, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={type.image} alt={type.name} />
                  <Card.Body>
                    <Card.Title>{type.name}</Card.Title>
                    <Card.Text>{type.description}</Card.Text>
                    <div>
                      <Button onClick={toggleTermForm} className='Term'>Term Form</Button>
                      <Button onClick={toggleSavingForm} className='saving'>Savings Form</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>

      {/* Contact Form */}
      <Modal show={showTermForm} onHide={toggleTermForm} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Term Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewTerm />
        </Modal.Body>
      </Modal>

      {/* Investment Form */}
      <Modal show={showSavingForm} onHide={toggleSavingForm} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Saving Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewSaving />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Services;
