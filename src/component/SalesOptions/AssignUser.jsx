import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import jsPDF from 'jspdf';

import { MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



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

export default function AssignUser({open,handleClose,singleData,singleData1}) {
 
    const [ user, setuser ] = React.useState()

   const setrpfuser =(event)=>{
    setuser(event.target.value)

   }
   const updateUser =()=>{
    
    fetch("https://localhost:7268/Rfp/V1/AssignUser", {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({

          rfpr_id: singleData.rfpr_id ,
          ausr_id:  user
        
          
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
          <StyledTableCell align="center">RFPR Id</StyledTableCell>
          <StyledTableCell align="center">Enquiry Id</StyledTableCell>
              <StyledTableCell align="center">Enquiry Date</StyledTableCell>
              <StyledTableCell align="center">Customer Id</StyledTableCell>
              <StyledTableCell align="center"> User</StyledTableCell>
             
            
           
            
          </TableRow>
        </TableHead>
        <TableBody>
        
            <StyledTableRow  key={singleData.id}>
                 <StyledTableCell align="center" component="th" scope="row" >
                  {singleData.rfpr_id }
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {singleData.rfpr_enqr_id}
                </StyledTableCell>
                <StyledTableCell align="center">{singleData.rpfr_rfpc_id}</StyledTableCell>
                <StyledTableCell align="center">{singleData.rfpr_created_ausr_id} </StyledTableCell>
                <Select
                 labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value="INTRNL"
                 defaultValue={"o1"}
                 label=""
                   onChange={setrpfuser}
                 >
                
                  {singleData1.map((row) => ( <MenuItem value={row.ausr_id} >{row.ausr_id}</MenuItem>))}
                
                 
                  </Select>
            </StyledTableRow >
     
        </TableBody>
      </Table>
    </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
          <Button onClick={updateUser}>AssignUser</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
