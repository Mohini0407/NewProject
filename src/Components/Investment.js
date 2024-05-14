import React, { useRef, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../AllCss/ContactUs.css'; 


const Investment= () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    investAmount:'',
    gender:'',
    dateOfBirth:'',
    occupation:'',
    annualIncome:'',
    education:'',
    smoker:'',
    pincode:''
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    data.append('smoker', formData.smoker);
    data.append('pincode', formData.pincode);
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
        education:'',
        smoker:'',
        pincode:''
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
          <Card.Title className='overlay-text '></Card.Title>
          <Form ref={Form} onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="fullName"  value={formData.fullName} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange}/>
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
              <Form.Control type="text" name="education" value={formData.education} onChange={handleChange}/>
            </Form.Group>
            
            <Form.Label>Are You a Smoker or Non-Smoker:</Form.Label>
              <Form.Control as="select" name="smoker"  value={formData.smoker} onChange={handleChange} >
                <option>Smoker</option>
                <option>Non-Smoker</option>
                
              </Form.Control>
  

            <Form.Group controlId="formPincode">
              <Form.Label>Pincode:</Form.Label>
              <Form.Control type="number" name="pincode" value={formData.pincode} onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formInvestment">
              <Form.Label>Investment Amount:</Form.Label>
              <Form.Control type="number" name="investmentAmount" value={formData.investmentAmount} onChange={handleChange}/>
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

export default Investment;
