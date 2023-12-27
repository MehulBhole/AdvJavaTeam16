import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { sendOwnerData } from '../services/Owner';

export function RegistrationOwner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    address: '',
    dob: '',
    panNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendOwnerData(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log('Form Data:', formData);
  };

  const styles = {
    registrationForm: {
      maxWidth: '400px',
      margin: '0 auto',
      marginBottom: '100px'
    },
    form: {
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    },
    label: {
      fontWeight: 'bold',
      fontSize: '14px',
    },
    button: {
      marginTop: '10px',
      fontSize: '14px',
    },
  };

  return (
    <Form onSubmit={handleSubmit} style={styles.registrationForm}>
      <div style={styles.form}>
        <Form.Group controlId="name">
          <Form.Label style={styles.label}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label style={styles.label}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="mobile">
          <Form.Label style={styles.label}>Mobile</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter Mobile"
            name="mobile"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label style={styles.label}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label style={styles.label}>Address</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Address"
            name="address"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="dob">
          <Form.Label style={styles.label}>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="panNumber">
          <Form.Label style={styles.label}>PAN Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter PAN Number"
            name="panNumber"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={styles.button}>
          Register
        </Button>
      </div>
    </Form>
  );
}
