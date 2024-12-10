import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function BasicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = { email: '', password: '' };
    let isValid = true;

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Password Validation (min length of 6 characters)
    if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log('Form submitted with data:', formData);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h5">Form</Typography>

      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email} // Show error if email is invalid
        helperText={errors.email} // Show error message
      />
      
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password} // Show error if password is too short
        helperText={errors.password} // Show error message
      />

      <Button variant="contained" type="submit" fullWidth>
        Submit
      </Button>
    </Box>
  );
}

export default BasicForm;
