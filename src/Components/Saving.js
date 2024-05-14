// Services.js
import React from 'react';
import { Button } from 'react-bootstrap';

const Saving = ({ onClick }) => {
  return (
    <div>
      <h2>Our Services</h2>
      <Button variant="primary" onClick={onClick}>Saving Form</Button>
    </div>
  );
};

export default Saving;
