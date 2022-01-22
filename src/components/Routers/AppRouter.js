import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Customers from '../Customers/Customers';
import Employees from '../Employees/Employees';

const AppRouter = () => {

  return (
    <div style={{width: '100%'}}>
      <Navbar />
      <div style={{ marginTop: "75px", width: "100%"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Employees" element={<Employees/>} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;