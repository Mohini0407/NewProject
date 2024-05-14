import React, { useRef, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './AllCss/ContactUs.css';

const NewSaving= () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    occupation: '',
    annualIncome: '',
    education: '',
    smoker: '',
    investmentAmount:'',
    pincode: '',
    service: '',
    serviceType: ''
  });

  const servicesData = [
    {
      name: 'Insurance',
      types: ['Life Insurance', 'Health Insurance','General Insurance']
    },
    {
      name: 'Mutual Fund',
      types: ['Systematic Investment Plan', 'Lumpsum Mutual Fund','Balanced Fund']
    },
    {
      name: 'Alternative Investment',
      types: ['Portfolio Management System', 'Alternative Investment Fund','Land']
    },
    {
      name: 'Loan',
      types: ['Business Loan', 'Personal Loan','Hour Loan']
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setFormData({
      ...formData,
      service: selectedService,
      serviceType: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('investmentAmount', formData.investmentAmount);
    data.append('gender', formData.gender);
    data.append('dateOfBirth', formData.dateOfBirth);
    data.append('occupation', formData.occupation);
    data.append('annualIncome', formData.annualIncome);
    data.append('education', formData.education);
     data.append('investmentAmount', formData.investmentAmount);
    data.append('smoker', formData.smoker);
    data.append('pincode', formData.pincode);
    data.append('service', formData.service);
    data.append('serviceType', formData.serviceType);
    const Sheet_Url = "https://script.google.com/macros/s/AKfycbw0ER-P6GT5mLiHlSmbOYJhnzkQr6p2fYj5S9KxNwhPLZ7tDPrttO20lMW7JJnmkefwdg/exec"
    try {
      await fetch(Sheet_Url, {
          method: 'POST',
          body: data,
          muteHttpExceptions: true,
      });
      setFormData({
        fullName: '',
        email: '',
        investmnet: '',
        gender:'',
        dateOfBirth:'',
        occupation:'',
        annualIncome:'',
        investmentAmount:'',
        education:'',
        smoker:'',
        pincode:'',
        service:'',
        serviceType:''
      });
      alert("Data save Successfully")
  } catch (error) {
      console.log(error);
  }
};

  return (
    <div id="contactus">
      <Card className="contact-card">
        <Card.Body>
          <Card.Title className="overlay-text"></Card.Title>
          <Form ref={form} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender:</Form.Label>
              <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDOB">
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formOccupation">
              <Form.Label>Occupation:</Form.Label>
              <Form.Control type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formIncome">
              <Form.Label>Annual Income:</Form.Label>
              <Form.Control type="number" name="annualIncome" value={formData.annualIncome} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEducation">
              <Form.Label>Educational Qualification:</Form.Label>
              <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formService">
              <Form.Label>Service:</Form.Label>
              <Form.Control as="select" name="service" value={formData.service} onChange={handleServiceChange}>
                <option value="">Select Service</option>
                {servicesData.map((service, index) => (
                  <option key={index}>{service.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            {formData.service && (
              <Form.Group controlId="formType">
                <Form.Label>Type:</Form.Label>
                <Form.Control as="select" name="serviceType" value={formData.serviceType} onChange={handleChange}>
                  <option value="">Select Type</option>
                  {servicesData.find((service) => service.name === formData.service).types.map((type, index) => (
                    <option key={index}>{type}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}
           <Form.Group controlId="forminvestmentAmount">
              <Form.Label>Investment Amount:</Form.Label>
              <Form.Control type="number" name="investmentAmount" value={formData.investmentAmount} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formSmoker">
              <Form.Label>Are You a Smoker or Non-Smoker:</Form.Label>
              <Form.Control as="select" name="smoker" value={formData.smoker} onChange={handleChange}>
                <option>Smoker</option>
                <option>Non-Smoker</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPincode">
              <Form.Label>Pincode:</Form.Label>
              <Form.Control type="number" name="pincode" value={formData.pincode} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formTerms">
              <Form.Check type="checkbox" label="Agree to terms savings" name="terms" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewSaving;
