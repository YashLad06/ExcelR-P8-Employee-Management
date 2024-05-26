
import { useState } from 'react';
// import AddEmployee from "../AddEmployee/AddEmployee";
import { AddEmployee, EmployeesList } from "../../components";

import "./AdminDashboard.css";
// import { useNavigate } from "react-router-dom";

function AdminDashboard() {

    const [activeComponent, setActiveComponent] = useState('AddEmployee');
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'AddEmployee':
                return <AddEmployee />
            case 'EmployeesList':
                return <EmployeesList />
            // default:
            //     return <AddEmployee />
        }
    };

    // const navigateToPage = useNavigate();

    // const GoToHr = () => {
    //     navigateToPage('/hr');
    // }
    // const GoToFinance = () => {
    //     navigateToPage('/finance');
    // }
    // const GetAllEmployees = () => {
    //     navigateToPage('/all-employees');
    // }
    // const GetAllProjects = () => {
    //     navigateToPage('/all-projects');
    // }

    return (
        <>
            <div className="admin-dashboard">
                <div className="container">
                    <h1>Admin Dashboard</h1>
                </div>
            </div>

            <div className='app__header'>

                <div className='master-Navigation'>
                    <nav>
                        <button onClick={() => {
                            setActiveComponent('AddEmployee');
                            handleButtonClick('AddEmployee');
                        }}
                            style={{
                                border: activeButton === 'AddEmployee' ? '2px dashed #fcc200' : 'transparent',
                            }}
                        >
                            Add new Employee
                        </button>
                        <button onClick={() => {
                            setActiveComponent('EmployeesList');
                            handleButtonClick('EmployeesList');
                        }}
                            style={{
                                border: activeButton === 'EmployeesList' ? '2px dashed #fcc200' : 'transparent',
                            }}
                        >
                            List of Employees
                        </button>
                    </nav>
                </div>

                <div className='master-content'>
                    {/* <h2>{activeComponent}</h2> */}
                    {renderComponent()}
                </div>

            </div>

            {/* <div className="admin-dashboard">
                <div className="container">
                    <h1>Admin Dashboard</h1>

                    <Box sx={{ margin: '1em 0' }}>
                        <button className="admin-btn" onClick={GoToHr}>HR</button>
                        <button className="admin-btn" onClick={GoToFinance}>Finance</button>
                        <button className="admin-btn" onClick={GetAllEmployees}>All Employees</button>
                        <button className="admin-btn" onClick={GetAllProjects}>All Projects</button>
                    </Box>
                </div>
            </div> */}
        </>
    );
}

export default AdminDashboard;
