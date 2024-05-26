// import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/LoginPage/Login';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import HRdept from './components/HRDeptDashboard/HRDeptDashboard';
import FinanceDept from './components/FinanceDeptDashboard/FinanceDept';
import EmployeesList from './components/EmployeeList/EmployeesList';
import AddEmployee from './components/AddEmployee/AddEmployee';

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/hr' element={<HRdept />} />
            <Route path='/finance' element={<FinanceDept />} />
            <Route path='/all-employees' element={<EmployeesList />} />
            <Route path='/all-projects' element={<AddEmployee />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
