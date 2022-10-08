import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function Department() {
  const [empData, setEmpData] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2")
      .then((res) => setEmpData(res.data.data))
  }, [])
  console.log(empData)
  return (
    <div style={{ textAlign: "center" }}>
      <Paper sx={{ minWidth: 240, textAlign: "center" }} elevation={10}>
        <h1>DEPARTMENT TABLE</h1>

      </Paper >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">
          <TableHead>
            <TableRow >
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Image</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {empData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell align="center">{row.first_name}</StyledTableCell>
                <StyledTableCell align="center">{row.last_name}</StyledTableCell>
                <StyledTableCell align="center">
                  <img className='imgavtar' src={row.avatar} alt="Img" />
                </StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Department
