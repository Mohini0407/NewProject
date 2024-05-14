// Term.js
import React from 'react';
import { Button } from 'react-bootstrap';

const Term = ({ onClick }) => {
  return (
    <div>
      <h2>Terms</h2>
      <Button variant="primary" onClick={onClick}>Term Form</Button>
    </div>
  );
};

export default Term;
