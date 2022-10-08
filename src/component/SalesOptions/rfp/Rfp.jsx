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
  



export default function Rfp({ idMessage }  ) {

   
const [statusdata,setstatusData]=useState([])
const [data1,setData1]=useState([])
    const [empData,setEmpData]=useState([])
    
  const [singleData, setSingleData] = useState([])
  const [open, setOpen] = React.useState(false);
  const [openRfp, setOpenRfp] = React.useState(false);
  const [openupdate, setOpenupdate] = React.useState(false);



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
    fetch("https://localhost:7268/Rfp/V1/ToGetAllActiveRFPs", {
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
                            <Button > Active Enquires</Button>
                            <Button> Dummy</Button>
                            <Button sx={{color:"red"}}> RFP</Button>
                        </FormControl>
                    </Paper>
                  
                  
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">
     
          <TableHead>
          <TableRow> All RFPS</TableRow>
            <TableRow>
              <StyledTableCell align="center">RFPR ID</StyledTableCell>
              <StyledTableCell align="center">RFPR Enquiry Id</StyledTableCell>
              <StyledTableCell align="center">RFPR Subject</StyledTableCell>
              <StyledTableCell align="center">RFPR Intro Note</StyledTableCell>
              <StyledTableCell align="center">RFPR RFPC Id</StyledTableCell>
              <StyledTableCell align="center">RFPR created USER Id</StyledTableCell>
              <StyledTableCell align="center">RFPR LuDateTime</StyledTableCell>
              <StyledTableCell align="center">Rfpr Status</StyledTableCell>
              <StyledTableCell align="center">VIEW DOCUMENT</StyledTableCell>
              <StyledTableCell align="center">ASSIGN TO USER</StyledTableCell>
              <StyledTableCell align="center">UPDATE STATUS</StyledTableCell>
              </TableRow>
        </TableHead>
          <TableBody>
            {empData.map((row) => (

              <StyledTableRow  key={row.rfpr_id}>

                 <StyledTableCell align="center" component="th" scope="row" >
                  {row.rfpr_id }
                </StyledTableCell>

                <StyledTableCell align="center" component="th" scope="row" >
                  {row.rfpr_enqr_id }
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.rfpr_subject}
                </StyledTableCell>
               <StyledTableCell align="center">{row.rfpr_intro_note}</StyledTableCell>
                <StyledTableCell align="center">{row.rpfr_rfpc_id} </StyledTableCell>
                <StyledTableCell align="center">{row.rfpr_created_ausr_id} </StyledTableCell>
                 <StyledTableCell align="center">{row.rfpr_ludatetime}</StyledTableCell>
                  <StyledTableCell align="center"> {row.rfpr_status}</StyledTableCell>

                 <StyledTableCell align="center"onClick={() => handleClick(row.enquiry_id)} ><button>VIEW</button> </StyledTableCell>
               
                 <StyledTableCell align="center"onClick={() => handleClick(row.enquiry_id)}  >Assign to user</StyledTableCell> 
                <StyledTableCell align="center"onClick={() => handleClickupdateStatus(row)}  ><button>Update Status</button> </StyledTableCell> 
                  </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
           {/*       
               <EnqDoc open={open} handleClose={handleClose} singleData={singleData} />
              <ConvertToRfp open={openRfp} handleClose={handleCloseRfp} singleData={singleData} singleData1={Rfpcat}/>
                <Updatestatusenq open={openupdate} handleClose={handleClosestatusupdate} singleData={statusdata} /> */}

      
    </div>
  );

   }