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

export default function EnqDoc({open,handleClose,singleData}) {

const  pdfgenerate=(base64String1)=>{
  
// const decodeFileBase64=(base64String1)=>{
  var ab= decodeURIComponent(
    atob(base64String1.substring(base64String1.indexOf(",")+1))
    .split("")
    .map(function(c){
      return "%" +("00"+c.charCodeAt(0).toString(16)).slice(-2);
    })
    .join("")
  );
  console.log(ab);
// };

var c=new jsPDF()

var doc=new jsPDF('p','in','a4','false');

// doc.setFont('Helvertica','bold')

// doc.addPage(ab.text)
 doc.text(0,0,ab)
 doc.addPage()
doc.save('document.pdf')
  }
  const  pdfgenerate1=(a)=>{
    console.log(a)
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
            <StyledTableCell align="center">Enquiry ID</StyledTableCell>
            <StyledTableCell align="center">Document Index</StyledTableCell>
            <StyledTableCell align="center">Document Description</StyledTableCell>
            <StyledTableCell align="center">Document </StyledTableCell>
           
            
          </TableRow>
        </TableHead>
        <TableBody>
          {singleData.map((row) => (
            <StyledTableRow  key={row.id}>
              <StyledTableCell align="center">{row.document_index}</StyledTableCell>
              <StyledTableCell align="center">{row.document_desc}</StyledTableCell>
              <StyledTableCell  key={row.document_path}align="center" onClick={()=>pdfgenerate(row.document_path)} >Download Pdf</StyledTableCell>
              {/* <embed src={`data:application/pdf;base64,${row.document_path}`} /> */}
              
              
            </StyledTableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
