import React from 'react';
import LoginSignUp from './LoginSignUp';
import AppointmentForm from '../components/Appoinments';
import { Route, Routes } from 'react-router-dom';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LoginSignUp/>} />

        <Route path='/doctorAdd' element={<AppointmentForm/>} />
    </Routes>
  );
}

export default AllRoutes;
