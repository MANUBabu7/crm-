import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { border, color } from '@mui/system';
import "./Admin.css"
import { Box, Paper } from '@mui/material';
import Body from '../body/Body';
import { Link } from 'react-router-dom';

export default function Admin({data}) {
 
   

    return (

<div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>


<Paper sx={{ minWidth: 240, height: 580, marginLeft:1 ,textAlign:"center" }}elevation={4}>
                <FormControl sx={{ width: "180px", marginTop: "20px",  }}>
                
<div className='dropdown'>
  <button className='dropbtn'>Profile</button>
  <div className='dropdown-content'>
  <Link to="/login" style={{ textDecoration: "none" }}>
<button >
 Edit Profile
</button>
</Link>
<Link to="/login" style={{ textDecoration: "none" }}>
<button >
 Edit Profile
</button>
</Link>
<Link to="/body" style={{ textDecoration: "none" }}>
<button >
 Edit Profile
</button>
</Link>
  
  </div>
</div>
          
        </FormControl>
      </Paper>
      {/* <Body/> */}
</div>
    );
}
