import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import jsPDF from 'jspdf';

import { FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';



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

export default function ConvertToRfp({open,handleClose,singleData,singleData1}) {



  const [rfpdoccat,setrfpdoccat]=React.useState([])
  const [rfptype,setrfptype]=React.useState([])
  const [ Rfpsubject, setRfpsubject ] = React.useState()
  const [ Rfpintro, setRfpintro ] = React.useState()
   const [ Rfpcatg, setRfpcatg ] = React.useState()
  
  const [rfpinputs, setrfpInputs] = React.useState([]);

 
   
  //   React.useEffect(()=>{
  //     fetch("https://localhost:7268/Enquiries/V1/ToGetAllRfpCategory", {
  //         method: "GET",
  //         crossDomain: true,
  //         headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //             "Access-Control-Allow-Origin": "*",
  //         },
  //     })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setRfpcatg(data);
            
             
  //         });
  
  // },[])

 const check=(event)=>
 {
  // console.log(Rfpcatg)
  setRfpcatg(event.target.value)
  console.log(event.target.value)
 }
  const rfpsubject = (event) => {
    setRfpsubject(event.target.value)
  }
  const  rfpintro = (event) => {
    setRfpintro(event.target.value)
  }
  const  Rfpcat = (event) => {
    setrfpdoccat(event.target.value)
  }
  const  Rfptype = (event) => {
    setrfptype(event.target.value)
  }


const print=(event)=>{
  event.currentTarget.disabled=true;
  // event.currentTarget.innerHtml="uploded"
  var rfpdoc = function(rfpsubject,rfpintro,Rfpcat,Rfptype,Rfpcatg){
    this.rfpsubject = rfpsubject; 
    this.rfpintro=rfpintro;
    this.Rfpdcat=Rfpcat;
    this.Rfptype=Rfptype;
    this.Rfpcatg=Rfpcatg
   
  }
  
  var rfpdoc1 = new rfpdoc(Rfpsubject,Rfpintro,rfpdoccat,rfptype,Rfpcatg);
setrfpInputs([...rfpinputs, rfpdoc1 ])

  
}
const print1=()=>{
  
  fetch("https://localhost:7268/Rfp/V1/AddRfp", {
    method: "POST",
    crossDomain: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    body: rfpinputs

})
console.log(rfpinputs)
}





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



var doc=new jsPDF('landscape','px','a4','false');
doc.setFont('Helvertica','bold')
doc.text(100,80,ab)
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
       
        <DialogContent >
          <h1>CONVERT ENQUIRY TO RFP</h1>
        
          <div><p>RFP SUBJECT</p>
          <input type="text"  onChange={rfpsubject}  />
          </div>
          <div><p>RFP INTRO NOTE</p>
          <input type="text"  onChange={rfpintro}/>
          </div>
          <p>RFP </p>
          <Select
                 labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value="INTRNL"
                 defaultValue={"o1"}
                 label=""
                   onChange={check}
                 >
                
                  {singleData1.map((row) => ( <MenuItem value={row.rfpc_id}>{row.rfpc_name}</MenuItem>))}
                
                 
                  </Select>
      
            <p>RFP DOCUMENTS</p>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Enquiry ID</StyledTableCell>
            <StyledTableCell align="center">Document Index</StyledTableCell>
            <StyledTableCell align="center">Document Description</StyledTableCell>
            <StyledTableCell align="center">Document </StyledTableCell>
            <StyledTableCell align="center">RFPD TYPE</StyledTableCell>
              <StyledTableCell align="center">RFPD DOC CATEGORY</StyledTableCell>
           
            
          </TableRow>
        </TableHead>
        <TableBody>
          {singleData.map((row) => (
            <StyledTableRow  key={row.id}>
               <StyledTableCell align="center">{row.enquiry_id}</StyledTableCell>
              <StyledTableCell align="center">{row.document_index}</StyledTableCell>
              <StyledTableCell align="center">{row.document_desc}</StyledTableCell>
              <StyledTableCell  key={row.document_path}align="center" onClick={()=>pdfgenerate(row.document_path)}><button>Download Pdf</button></StyledTableCell>

              <StyledTableCell>     <Select
                 labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value="INTRNL"
                 defaultValue={"INTRNL"}
                 label=''
                   onChange={Rfptype}
                 >
                  
                  <MenuItem value={"INTRNL"}>INTRNL</MenuItem>
                  <MenuItem value={"FRCLNT"}>FRCLNT</MenuItem>
                 
                  </Select></StyledTableCell>

                  <StyledTableCell>     
                <Select
                 labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={"PRPSL"}
                 label="RFPD CATEGORY"
                    onChange={Rfpcat}
                 >
                  <MenuItem value={"PRPSL"}>PRPSL</MenuItem>
                  <MenuItem value={"FNREQ"}>FNREQ</MenuItem>
                  <MenuItem value={"UIREQ"}>UIREQ</MenuItem>
                  <MenuItem value={"OTHER"}>OTHER</MenuItem>
                 
                  </Select>
                  </StyledTableCell>

               <StyledTableCell>
                <button  onClick={print}>Upload</button>
               </StyledTableCell>


              {/* type="time" inputProps={inputProps}   */}
              
            </StyledTableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
          <Button onClick={print1}>CONVERT TO RFP</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
