import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import DomainIcon from '@mui/icons-material/Domain';
import axios from 'axios'


import { Button, FormControl, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SalesDash() {


    const [activeenq,setactiveenq]=React.useState([])
    const [activerfp,setactiverfp]=React.useState([])

    React.useEffect(()=>{
        axios.get("https://localhost:7268/Enquiries/V1/ToGetAllActiveEnquiries")
        .then((res)=>setactiveenq(res.data))
    },[])
    React.useEffect(()=>{
        axios.get("https://localhost:7268/Rfp/V1/ToGetAllActiveRFPs")
        .then((res)=>setactiverfp(res.data))
    },[])
    return (          
         
<div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>            

                    <Paper sx={{ minWidth: 240, height: 880, marginRight: 2, textAlign: "center", marginTop: "10px" }} elevation={4}>
                        <FormControl sx={{ width: "180px", marginTop: "20px", }}>


                        <Button>  <Link to="/Dummy">

                           Active Enquiry
                   </Link></Button>
                            

                            <Button> Dummy</Button>
                            <Button><Link to="/Rfpsales">
                                RFP
                                </Link></Button>
                            {/* <MenuItem value={30}>Thirty</MenuItem> */}
                        </FormControl>
                    </Paper>

                    

                       <Paper sx={{width:"200px",height:"200px",extAlign:"center"}} elevation={10}>
        <Link to="/Dummy" style={{textDecoration:"none"}}>
            {/* <PeopleIcon sx={{marginTop:"10px"}}/> */}
        <Typography >
            
        Active Enquiries
        </Typography>
        <p style={{width:"40px",marginLeft:"85px",height:"30px",paddingTop:"10px",borderRadius:"50%" ,border:"1px solid green",textAlign:"center",backgroundColor:"blue",color:"white",textDecoration:"none"}}>{activeenq?.length}</p>
        </Link>
      </Paper >
      <Paper sx={{width:"200px",height:"200px",textAlign:"center"}} elevation={3}>
        <Link to="/Rfpsales" style={{textDecoration:"none"}}>
            {/* <DomainIcon sx={{marginTop:"10px"}}/> */}
        <Typography>
            
        Active RFPS
        </Typography>
        <p style={{width:"40px",marginLeft:"85px",height:"30px",paddingTop:"10px",borderRadius:"50%" ,border:"1px solid green",textAlign:"center",backgroundColor:"blue",color:"white",textDecoration:"none"}}>{activerfp?.length}</p>
        </Link>
      </Paper >

                       
      </div>

            


            

        
    );
}
