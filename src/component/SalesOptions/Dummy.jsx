// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { Button, FormControl, Grid, Modal, Paper, Table, TableContainer, TableHead, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Label } from '@mui/icons-material';
import { Box, style } from '@mui/system';
import EnqDoc from './EnqDoc';
import ConvertToRfp from './ConvertToRfp';
import Updatestatusenq from './Updatestatusenq';




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
  



export default function Dummy({ idMessage }  ) {

   
const [statusdata,setstatusData]=useState([])
const [data1,setData1]=useState([])
    const [empData,setEmpData]=useState([])
    
  const [singleData, setSingleData] = useState([])
  const [open, setOpen] = React.useState(false);
  const [openRfp, setOpenRfp] = React.useState(false);
  const [openupdate, setOpenupdate] = React.useState(false);
  const [Rfpcat, setRfpcatg] = React.useState([]);

 
   
  React.useEffect(()=>{
    fetch("https://localhost:7268/Enquiries/V1/ToGetAllRfpCategory", {
        method: "GET",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.json())
        .then((data) => {
          setRfpcatg(data);
          
           
        });

},[])


    const handleClick = (data) => {
        
    fetch("https://localhost:7268/Enquiries/V1/GetAllEnquiryDocuments", {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body:data
    })
        .then((res) => res.json())
        .then((data) => {
            setSingleData(data)
          
           
        });
      
        
        setOpen(true);
        console.log(data, "data")
      }
      const handleClose = () => {
        setOpen(false);
      };
    
function handleClickRfp(rowdata){
  
  setOpenRfp(true);
}

const handleCloseRfp = () => {
  setOpenRfp(false);
};
function handleClickupdateStatus(rowdata){
  setstatusData(rowdata)
  setOpenupdate(true);
}
const handleClosestatusupdate=()=>
{
  setOpenupdate(false);
}
    function handalclick(rowdata){
      console.log(rowdata)
      

    fetch("https://localhost:7268/Enquiries/V1/GetAllEnquiryDocuments", {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: rowdata
    })
        .then((res) => res.json())
        .then((data) => {
            setData1(data);
          
           
        });
        console.log(data1)
       
      }

useEffect(()=>{
    fetch("https://localhost:7268/Enquiries/V1/ToGetAllActiveEnquiries", {
        method: "GET",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            setEmpData(data);
          
           
        });

},[])


    return (          
         
         
<div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>    

                    <Paper sx={{ minWidth: 240, height: 880, marginRight: 2, textAlign: "center", marginTop: "10px" }} elevation={4}>
                        <FormControl sx={{ width: "180px", marginTop: "20px", }}>
                            <Button sx={{color:"red"}}> Active Enquires</Button>
                            <Button> Dummy</Button>
                            <Button> RFP</Button>
                        </FormControl>
                    </Paper>
                  
                  
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">
          <TableHead> <Label value="All Active Enquiries">All Active Enquiries</Label>
        
            <TableRow >
              <StyledTableCell align="center">Enquiry Id</StyledTableCell>
              <StyledTableCell align="center">Enquiry Date</StyledTableCell>
              <StyledTableCell align="center">Customer Id</StyledTableCell>
              <StyledTableCell align="center">status</StyledTableCell>
              <StyledTableCell align="center">View Enquiry Documents</StyledTableCell>
              <StyledTableCell align="center">Convert To RFP</StyledTableCell>
              {/* <StyledTableCell align="center">Assign To User</StyledTableCell> */}
              <StyledTableCell align="center">Update Status</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {empData.map((row) => (
              <StyledTableRow key={row.enquiry_id}>
                <StyledTableCell align="center" component="th" scope="row" >
                  {row.enquiry_id }
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.enquiry_date}
                </StyledTableCell>
                <StyledTableCell align="center">{row.customer_id}</StyledTableCell>
                <StyledTableCell align="center">{row.status} </StyledTableCell>
                <StyledTableCell align="center"onClick={() => handleClick(row.enquiry_id)} ><button>VIEW</button> </StyledTableCell>
                <StyledTableCell align="center"onClick={() => handleClickRfp(row.enquiry_id)} ><button>Convert To RFP </button></StyledTableCell>
                {/* <StyledTableCell align="center"onClick={() => handleClick(row.enquiry_id)}  >Assign to user</StyledTableCell> */}
                <StyledTableCell align="center"onClick={() => handleClickupdateStatus(row)}  ><button>Update Status</button> </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <EnqDoc open={open} handleClose={handleClose} singleData={singleData} />
      <ConvertToRfp open={openRfp} handleClose={handleCloseRfp} singleData={singleData} singleData1={Rfpcat}/>
      <Updatestatusenq open={openupdate} handleClose={handleClosestatusupdate} singleData={statusdata} />

      
    </div>
  );
}
