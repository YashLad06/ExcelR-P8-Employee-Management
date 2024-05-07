// import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/LoginPage/Login';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import HRdept from './components/HRDeptDashboard/HRDeptDashboard';
import FinanceDept from './components/FinanceDeptDashboard/FinanceDept';
import EmployeesList from './components/EmployeesDashboard/EmployeesList';
import AllProjects from './components/AllProjectList/AllProjects';
// Each Project detail
// Projects of Individual Employee

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
        {/* <Login /> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/hr' element={<HRdept />} />
          <Route path='/finance' element={<FinanceDept />} />
          <Route path='/all-employees' element={<EmployeesList />} />
          <Route path='/all-projects' element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App;
