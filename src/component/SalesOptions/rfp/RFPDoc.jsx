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

export default function RFPDoc({open,handleClose,singleData}) {

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
            <StyledTableCell align="center">RFPR ID </StyledTableCell>       
            <StyledTableCell align="center">Document Index</StyledTableCell>
            <StyledTableCell align="center">RFPD TYPE</StyledTableCell>
            <StyledTableCell align="center">Document Description</StyledTableCell>
            <StyledTableCell align="center">Document DOWNLOAD </StyledTableCell>
            <StyledTableCell align="center">RFPD VERSION</StyledTableCell>
            <StyledTableCell align="center"> RFPD PDF VERSION</StyledTableCell>
            <StyledTableCell align="center">RFPD SHARED STATUS</StyledTableCell>
            <StyledTableCell align="center">RFPD REVIEWED BY </StyledTableCell>
            <StyledTableCell align="center">RFPD PREPARED DATE</StyledTableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
          {singleData.map((row) => (
            <StyledTableRow  key={row.id}>
                   <StyledTableCell align="center">{row.rfpr_id}</StyledTableCell>          
              <StyledTableCell align="center">{row.rfpd_docindex}</StyledTableCell>
              <StyledTableCell align="center">{row.rfpd_type}</StyledTableCell>
              <StyledTableCell align="center">{row.rfpd_desc}</StyledTableCell>
              <StyledTableCell  key={row.rfpd_documentpath}align="center" onClick={()=>pdfgenerate(row.rfpd_documentpath)} ><Button>Download Pdf</Button></StyledTableCell>
            < StyledTableCell align="center">{row.rfpd_version}</StyledTableCell>
            <StyledTableCell align="center">{row.rfpd_pdfversion}</StyledTableCell>
              <StyledTableCell align="center">{row.rfpd_sharedstatus}</StyledTableCell>
              <StyledTableCell align="center">{row.rpfd_reviewed_by}</StyledTableCell>
              <StyledTableCell align="center">{row.rfpd_prepareddate}</StyledTableCell>  
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
