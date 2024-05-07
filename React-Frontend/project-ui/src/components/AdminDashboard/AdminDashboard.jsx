
import React, { useState } from 'react';
import { Box, Button, Accordion, AccordionSummary, AccordionDetails, Grid, MenuItem, OutlinedInput, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

    const today = new Date();
    const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const [birthDate, setBirthDate] = useState("1995-05-24");
    const [doJ, setDoJ] = useState(dateString);
    const [age, setAge] = useState(0);


    const values = {
        birthDate: "1995-05-24",
        properBirthDate: new Date("1995-05-24")
    };
    const ageValue = today.getFullYear() - values.properBirthDate.getFullYear();

    const handleDateChange = (event) => {
        const newBirthDate = new Date(event.target.value);
        const today = new Date();
        let newAge = today.getFullYear() - newBirthDate.getFullYear();
        const m = today.getMonth() - newBirthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < newBirthDate.getDate())) {
            newAge--;
        }
        setBirthDate(event.target.value);
        setAge(newAge);
    };

    const handleJoiningDateChange = (event) => {
        setDoJ(event.target.value);
    }

    const empRole = [
        {
            value: 'FE', label: 'Frontend Developer'
        },
        {
            value: 'BE', label: 'Backend Developer'
        },
        {
            value: 'INT', label: 'Intern'
        },
    ];

    const workHours = [
        {
            value: '6-hr', label: '6 Hours'
        },
        {
            value: '8-hr', label: '8 Hours'
        },
        {
            value: '10-hr', label: '10 Hours'
        },
    ];
    const workShift = [
        {
            value: 'day', label: 'Day Shift'
        },
        {
            value: 'night', label: 'Night Shift'
        },
    ];

    const empWorkCategory = [
        {
            value: 'billable', label: 'Billable - on Project'
        },
        {
            value: 'nonBillable', label: 'Non Billable - on Bench'
        },
    ];

    const empManager = [
        {
            value: 'Deborah', label: 'Deborah Harris'
        },
        {
            value: 'Elliot', label: 'Elliot Singh'
        },
        {
            value: 'Ronald', label: 'Ronald Perez'
        },
        {
            value: 'Violet', label: 'Violet Sheppard'
        }];

    const empBloodGroup = [
        {
            value: 'A+', label: 'A+'
        },
        {
            value: 'A-', label: 'A-'
        },
        {
            value: 'B+', label: 'B+'
        },
        {
            value: 'B-', label: 'B-'
        }, {
            value: 'AB+', label: 'AB+'
        },
        {
            value: 'AB-', label: 'AB-'
        },
        {
            value: 'O+', label: 'O+'
        },
        {
            value: 'O-', label: 'O-'
        }];
    const empGender = [{
        value: 'M', label: 'Male'
    },
    {
        value: 'F', label: 'Female'
    },
    {
        value: 'O', label: 'Other'
    }];
    const empMaritalStatus = [{
        value: 'Single', label: 'Single'
    },
    {
        value: 'Married', label: 'Married'
    },
    {
        value: 'Divorced', label: 'Divorced'
    }];

    const navigateToPage = useNavigate();

    const GoToHr = () => {
        navigateToPage('/hr');
    }
    const GoToFinance = () => {
        navigateToPage('/finance');
    }
    const GetAllEmployees = () => {
        navigateToPage('/all-employees');
    }
    const GetAllProjects = () => {
        navigateToPage('/all-projects');
    }

    return (
        <>
            <div className="admin-dashboard">
                <div className="container">

                    <h1>Admin Dashboard</h1>
                    <Box
                        height={100}
                        display="flex"
                        alignItems="flexStart"
                        flexDirection="column"
                        gap={1}
                        sx={{ marginLeft: '20px' }}
                    >
                        <p>You are adding New Employee details.</p>
                        <p>Please add both Professional and personal details.</p>
                    </Box>

                    {/* ADMIN ==> Add Employee dashboard */}
                    <div>
                        <Accordion sx={{ outline: '2px dashed blue', marginBottom: '1em' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <b>Employee Professional Details</b>
                            </AccordionSummary>
                            <AccordionDetails sx={{ background: '#e0ffff' }}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete='on'
                                >
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Employee Id"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="First Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                id="outlined-required"
                                                label="Middle Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Last Name"
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Office Location"
                                            />
                                        </Grid>

                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Date of Joining"
                                                type="date"
                                                value={doJ}
                                                onChange={handleJoiningDateChange}
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                label="Working hours"
                                                defaultValue="EUR"
                                                helperText="Assign working hours"
                                            >
                                                {workHours.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-select-currency"
                                                select
                                                label="Work Shift"
                                                defaultValue="EUR"
                                                helperText="which shift will they work in?"
                                            >
                                                {workShift.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-select-currency"
                                                select
                                                label="Role of Employee"
                                                defaultValue="EUR"
                                                helperText="Please select their role"
                                            >
                                                {empRole.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Employee Mail Id"
                                                type='email'
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                select
                                                label="Manager Name"
                                                defaultValue="EUR"
                                            >
                                                {empManager.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            {/* EmpId = emp+dateAndTime */}
                                        </Grid>

                                        <Grid item xs={6} md={3}>
                                            <Grid item xs={6} md={3}>
                                                <TextField
                                                    required
                                                    id="outlined-select-currency"
                                                    select
                                                    label="Client work Category"
                                                    defaultValue="EUR"
                                                    helperText="Is the employee Billable?"
                                                >
                                                    {empWorkCategory.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Box>
                            </AccordionDetails>

                            {/* button 1 and 2 */}
                        </Accordion>
                        <Accordion sx={{ outline: '2px dashed green', marginBottom: '1em' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <b>Employee Personal Details</b>
                            </AccordionSummary>
                            <AccordionDetails sx={{ background: '#e9ffdb' }}>

                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete='on'
                                >
                                    <Grid container spacing={1} >
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Phone no."
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            {/* Add Personal Mail Id */}
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Personal Mail Id"
                                                type="email"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Date of Birth"
                                                type="date"
                                                // defaultValue={values.birthDate}
                                                value={birthDate}
                                                onChange={handleDateChange}
                                                helperText="Add correct Date of Birth"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Emegency Phone No."
                                                type="number"
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                select
                                                id="outlined-required"
                                                label="Blood Group"
                                                defaultValue="A+"
                                                helperText="Is the employee Billable?"
                                            >
                                                {empBloodGroup.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>

                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                select
                                                id="outlined-required"
                                                label="Gender"
                                                defaultValue="M"
                                            >
                                                {empGender.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                disabled
                                                id="outlined-select-currency"
                                                label="Age"
                                                // defaultValue={ageValue}
                                                value={age}
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Adhaar Card"
                                                type="number"
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                label="Marital Status"
                                            >
                                                {empMaritalStatus.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="outlined-required"
                                                label="Permanent Address"
                                                multiline
                                                maxRows={3}
                                            />
                                        </Grid>
                                    </Grid>

                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ outline: '2px dashed blue', marginBottom: '1em' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <b>Project Details</b>
                            </AccordionSummary>
                            <AccordionDetails sx={{ background: '#e0ffff' }}>
                                {/* Active projects on top of component */}

                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete='on'
                                >
                                    <Grid container spacing={1} >
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Project Name"
                                                type="text"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Client Name"
                                                type="text"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Project Start Date"
                                                type="date"
                                                defaultValue={values.birthDate}
                                                // value={birthDate}
                                                // onChange={handleDateChange}
                                                helperText="Select correct Start Date"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Project End Date"
                                                type="date"
                                                defaultValue={values.birthDate}
                                                // value={birthDate}
                                                // onChange={handleDateChange}
                                                helperText="Select correct End Date"
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Technical Lead"
                                                type="text"
                                            />
                                        </Grid>

                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Project Manager"
                                                type="text"
                                            />
                                        </Grid>
                                    </Grid>

                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ outline: '2px dashed green', marginBottom: '1em' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <b>HR & Finance Details</b>
                            </AccordionSummary>
                            <AccordionDetails sx={{ background: '#e9ffdb' }}>
                                HR name, PAN Card, Bank Name, IFSC No, Date of Joining, CTC, Button "Do you need payslip?"

                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete='on'
                                >
                                    <Grid container spacing={1} >
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="HR Name"
                                                type="text"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="PAN Card No."
                                                type="text"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Bank Name"
                                                type="text"
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="IFSC No."
                                                type="text"
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                disabled
                                                id="outlined-required"
                                                label="Date of Joining"
                                                type="date"
                                                value={doJ}
                                            />
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="CTC"
                                                type="number"
                                            />
                                        </Grid>
                                    </Grid>

                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <Box sx={{ margin: '1em 0' }}>
                        <button className="admin-btn" onClick={GoToHr}>HR</button>
                        <button className="admin-btn" onClick={GoToFinance}>Finance</button>
                        <button className="admin-btn" onClick={GetAllEmployees}>All Employees</button>
                        <button className="admin-btn" onClick={GetAllProjects}>All Projects</button>
                    </Box>
                </div>
            </div>

        </>
    );
}

export default AdminDashboard;
