import { useState } from 'react';
import { Box, Button, Accordion, AccordionSummary, AccordionDetails, Grid, MenuItem, OutlinedInput, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import React from 'react';
import "./EmployeeDashboard.css";

function EmployeeDashboard() {
  return (
    <>
      <div className="employee-dashboard">
        <div className="container">

          <h1>Employee Dashboard</h1>
          <Box
            height={100}
            display="flex"
            alignItems="flexStart"
            flexDirection="column"
            gap={1}
            sx={{ marginLeft: '1rem' }}
          >
            {/* <p>You are adding New Employee details.</p> */}
            <p>Please check all your details.</p>
          </Box>

          {/* ADMIN ==> Add Employee dashboard */}
          <div className='emp-accordion'>
            <Accordion sx={{ outline: '2px dashed blue', marginBottom: '1em', marginLeft: '1rem' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <b>Your Professional Details</b>
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
                        disabled
                        id="outlined-disabled"
                        label="Employee Id"
                        value="101"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="First Name"
                        defaultValue="John"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Middle Name"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Last Name"
                        defaultValue="Doe"
                      />
                    </Grid>

                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Office Location"
                        defaultValue="Pune"
                      />
                    </Grid>

                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Date of Joining"
                        defaultValue="12-05-2024"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        id="outlined-select-currency"
                        disabled
                        label="Working hours"
                        defaultValue="6 Hours"
                      >
                        {/* {workHours.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))} */}
                      </TextField>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-select-currency"

                        label="Work Shift"
                        defaultValue="Day Shift"
                      >
                        {/* {workShift.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))} */}
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-select-currency"
                        label="Role of Employee"
                        defaultValue="Frontend Developer"
                      >
                        {/* {empRole.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))} */}
                      </TextField>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Employee Mail Id"
                        type='email'
                        defaultValue="john.doe@example.com"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Manager Name"
                        defaultValue="Elliot Singh"
                      >
                        {/* {empManager.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))} */}
                      </TextField>
                      {/* EmpId = emp+dateAndTime */}
                    </Grid>

                    <Grid item xs={6} md={3}>
                      <Grid item xs={6} md={3}>
                        <TextField
                          disabled
                          id="outlined-select-currency"
                          label="Client work Category"
                          defaultValue="Billable - on Project"
                        >
                          {/* {empWorkCategory.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))} */}
                        </TextField>
                      </Grid>
                    </Grid>
                  </Grid>

                </Box>
              </AccordionDetails>

              {/* button 1 and 2 */}
            </Accordion>
            <Accordion sx={{ outline: '2px dashed green', marginBottom: '1em', marginLeft: '1rem' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <b>Your Personal Details</b>
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
                        disabled
                        id="outlined-disabled"
                        label="Phone no."
                        type="number"
                        value="9174052531"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      {/* Add Personal Mail Id */}
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Personal Mail Id"
                        type="email"
                        value="john.doe@gmail.com"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Date of Birth"
                        defaultValue="23-05-2000"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Emegency Phone No."
                        type="number"
                        value="9174052531"
                      />
                    </Grid>

                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled

                        id="outlined-disabled"
                        label="Blood Group"
                        defaultValue="A+"
                      >
                        {/* {empBloodGroup.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))} */}
                      </TextField>
                    </Grid>

                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Gender"
                        defaultValue="M"
                      >
                        {/* {empGender.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))} */}
                      </TextField>
                    </Grid>
                    {/* <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-select-currency"
                        label="Age"
                        defaultValue="John"
                      />
                    </Grid> */}
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Adhaar Card"
                        type="number"
                        value="1234234545675678"
                      />
                    </Grid>

                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-select-currency"
                        label="Marital Status"
                        value="Single"
                      >
                        {/* {empMaritalStatus.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))} */}
                      </TextField>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <TextField
                        disabled
                        fullWidth
                        id="outlined-disabled"
                        label="Permanent Address"
                        multiline
                        maxRows={3}
                        value="Shaniwar Wada"
                      />
                    </Grid>
                  </Grid>

                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ outline: '2px dashed blue', marginBottom: '1em', marginLeft: '1rem' }}>
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
                        disabled
                        id="outlined-disabled"
                        label="Project Name"
                        type="text"
                        value="Adertisement Growth"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Client Name"
                        type="text"
                        value="Kamal"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Project Start Date"
                        // type="date"
                        defaultValue="01-06-2024"
                      // value={birthDate}
                      // onChange={handleDateChange}
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Project End Date"
                        // type="date"
                        defaultValue="01-12-2024"
                      />
                    </Grid>

                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Technical Lead"
                        type="text"
                        value="Martin Greaves"
                      />
                    </Grid>

                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Project Manager"
                        type="text"
                        value="Simon Railley"
                      />
                    </Grid>
                  </Grid>

                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ outline: '2px dashed green', marginBottom: '1em', marginLeft: '1rem' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <b>HR & Finance Details</b>
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
                        disabled
                        id="outlined-disabled"
                        label="HR Name"
                        type="text"
                        value="Nancy Shaw"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="PAN Card No."
                        type="text"
                        value="A1234S23"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Bank Name"
                        type="text"
                        value="SBI"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="IFSC No."
                        type="text"
                        defaultValue="SBIN0008987"
                      />
                    </Grid>

                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Date of Joining"
                        defaultValue="12-05-2024"
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="CTC"
                        type="number"
                        defaultValue="200000"
                      />
                    </Grid>
                  </Grid>

                </Box>
              </AccordionDetails>
            </Accordion>
          </div>

        </div>
      </div>

    </>
  );
}

export default EmployeeDashboard;
