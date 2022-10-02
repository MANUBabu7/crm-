import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';



import { Button, FormControl, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ManagerDash() {
    return (          
         
<div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>            

                    <Paper sx={{ minWidth: 240, height: 880, marginRight: 2, textAlign: "center", marginTop: "10px" }} elevation={4}>
                        <FormControl sx={{ width: "180px", marginTop: "20px", }}>

                     <h1> MANAGER OPTIONS</h1>
                        <Button>  <Link to="/Dummy">

                           Active Enquiry
                   </Link></Button>
                            

                            <Button> Dummy</Button>
                            <Button> <Link to="/Rfp">

RFP
</Link></Button>
                            {/* <MenuItem value={30}>Thirty</MenuItem> */}
                        </FormControl>
                    </Paper>

                       
      </div>

            


            

        
    );
}
