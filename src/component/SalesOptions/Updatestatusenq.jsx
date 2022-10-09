import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import jsPDF from 'jspdf';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Updatestatusenq({open,handleClose,singleData}) {
 
    const [ Rfpstatus, setRfpstatus ] = React.useState()

   const setsattus =(event)=>{
    setRfpstatus(event.target.value)

   }
   const updatesattus =()=>{
    
    fetch("https://localhost:7268/Enquiries/V1/UpdateStatusEnq", {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({

          enq_id: singleData.enquiry_id ,
          status: Rfpstatus
        
          
        } )
    })
    handleClose();
    alert("Updated")
    window.location.reload();
   }
  


  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
       
        <DialogContent>
          
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">Enquiry Id</StyledTableCell>
              <StyledTableCell align="center">Enquiry Date</StyledTableCell>
              <StyledTableCell align="center">Customer Id</StyledTableCell>
              <StyledTableCell align="center">status</StyledTableCell>
              <StyledTableCell align="center">Update status</StyledTableCell>
            
           
            
          </TableRow>
        </TableHead>
        <TableBody>
        
            <StyledTableRow  key={singleData.id}>
                 <StyledTableCell align="center" component="th" scope="row" >
                  {singleData.enquiry_id }
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {singleData.enquiry_date}
                </StyledTableCell>
                <StyledTableCell align="center">{singleData.customer_id}</StyledTableCell>
                <StyledTableCell align="center">{singleData.status} </StyledTableCell>
                <StyledTableCell><input onChange={setsattus}/></StyledTableCell>
            </StyledTableRow >
     
        </TableBody>
      </Table>
    </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
          <Button onClick={updatesattus}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
