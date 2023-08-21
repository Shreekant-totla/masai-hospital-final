import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    specialization: 'Cardiologist',
    experience: '',
    location: '',
    date: '',
    slots: '',
    fee: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/appointments',formData);

      if (response.ok) {
        alert('Appointment details submitted successfully!');
      } else {
        alert('Error submitting appointment details.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box w="30%" m="auto">
      <Heading size="lg">Appointment Form</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Image URL:</FormLabel>
          <Input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Specialization:</FormLabel>
          <Select
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
          >
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Experience:</FormLabel>
          <Input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Location:</FormLabel>
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Date:</FormLabel>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Slots:</FormLabel>
          <Input
            type="number"
            name="slots"
            value={formData.slots}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Fee:</FormLabel>
          <Input
            type="number"
            name="fee"
            value={formData.fee}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default AppointmentForm;


