
import React, { useRef, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../AllCss/ContactUs.css'; 


const ContactUs = () => {
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
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
    data.append('phoneNumber', formData.phoneNumber);
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
        phoneNumber: '',
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
    <div id="contactus" className="">
      
      <Card className="contact-card">
        <Card.Body>
          <Card.Title className='overlay-text '></Card.Title>
          <Form ref={Form} onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="fullName"  value={formData.fullName} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email"  value={formData.email}  onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formMobile">
              <Form.Label>Mobile No.:</Form.Label>
              <Form.Control type="number" name="phoneNumber"  value={formData.phoneNumber} onChange={handleChange}  />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender:</Form.Label>
              <Form.Control as="select" name="gender"  value={formData.gender} onChange={handleChange}claz >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDOB">
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control type="date" name="dateOfBirth"  value={formData.dateOfBirth} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formOccupation">
              <Form.Label>Occupation:</Form.Label>
              <Form.Control type="text" name="occupation"  value={formData.occupation} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formIncome">
              <Form.Label>Annual Income:</Form.Label>
              <Form.Control type="number" name="annualIncome"  value={formData.annualIncome} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEducation">
              <Form.Label>Educational Qualification:</Form.Label>
              <Form.Control type="text" name="education"  value={formData.education} onChange={handleChange} />
            </Form.Group>
            
            <Form.Label>Are You a Smoker or Non-Smoker:</Form.Label>
              <Form.Control as="select" name="smoker"  value={formData.smoker} onChange={handleChange} >
                <option>Smoker</option>
                <option>Non-Smoker</option>
                
              </Form.Control>

            <Form.Group controlId="formPincode">
              <Form.Label>Pincode:</Form.Label>
              <Form.Control type="number" name="pincode"  value={formData.pincode} onChange={handleChange} />
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

export default ContactUs;
