import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import "./EmployeesList.css";

const columns = [
  { id: 'empId', label: 'Employee Id', minWidth: 20 },
  { id: 'fullName', label: 'Name', minWidth: 50 },
  {
    id: 'mailId',
    label: 'Mail Id',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'office',
    label: 'Location',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'designation',
    label: 'Designation',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(empId, fullName, mailId, office, designation) {
  // const density = population / size;
  return { empId, fullName, mailId, office, designation };
}

const rows = [
  createData(101, 'John Doe', 'john.doe@example.com', 'Pune', 'Frontend'),
  createData(102, 'Jane Doe', 'jane.doe@example.com', 'Mumbai', 'Backend'),
];


function EmployeesList() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="employee-table">

      {/* <h3>Table of all Employees</h3> */}
      <Box
        height={100}
        display="flex"
        alignItems="flexStart"
        flexDirection="column"
        gap={1}
        sx={{ marginLeft: '1rem' }}
      >
        <p>You are adding New Employee details.</p>
        <p>Please add all relevant details.</p>
      </Box>

      {/* Add employee Table here*/}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: '75%', maxWidth: '100%' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#fcc200' }}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default EmployeesList;
