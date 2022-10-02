import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import Body from '../body/Body';
import { Button, Grid, Paper, Typography } from '@mui/material';

export default function SideBar() {
    const [select, setSelect] = React.useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
    };

    console.log(select)
    return (
        <div style={{ display: "flex",  width: "100%" }}>

               

        <Paper sx={{ minWidth: 240, height: 880, marginRight: 2, textAlign: "center", marginTop: "10px" }} elevation={4}>
            <FormControl sx={{ width: "180px", marginTop: "20px", }}>


                <Button> Profile
                    <select style={{ background: "none", border: "none", marginLeft: "10px", width: "20px" }}>
                        <option></option>
                        <option><Button>Edit</Button></option>


                    </select>
                </Button>


                  <Link to="/salesenq">

               Dummy
                       </Link>

                <Button> Dummy</Button>
                <Button> RFP</Button>
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
            </FormControl>
        </Paper>

        <div style={{display: "flex"}}>
            <Grid item xs={6}>
                <Paper sx={{ paddingBottom: "10px" , width: "200px", marginLeft:"100px",textAlign:"center"  }} elevation={10} >
                    <Typography sx={{ marginTop: "20px" }}>Dummy</Typography>
                    <Typography sx={{ marginBottom: "20px", color: "red", fontWeight: 100 }}>Current Month</Typography>
                    <h1 style={{ width: "40px", height: "40px", marginBottom: "10px", borderRadius: "50%", backgroundColor: "blue", color: "white", textAlign: "center", margin: "auto" }}>10</h1>


                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{ paddingBottom: "10px", width: "200px" ,marginLeft:"100px",textAlign:"center" }} elevation={10} >
                    <Typography sx={{ marginTop: "20px" }}>Dummy</Typography>
                    <Typography sx={{ marginBottom: "20px", color: "red", fontWeight: 100 }}>Current Month</Typography>
                    <h1 style={{ width: "40px", height: "40px", marginBottom: "10px", borderRadius: "50%", backgroundColor: "blue", color: "white", textAlign: "center", margin: "auto" }}>10</h1>


                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{ paddingBottom: "10px" , width: "200px" ,marginLeft:"100px" ,textAlign:"center" }} elevation={10} >
                    <Typography sx={{ marginTop: "20px" }}>Dummy</Typography>
                    <Typography sx={{ marginBottom: "20px", color: "red", fontWeight: 100 }}>Current Month</Typography>
                    <h1 style={{ width: "40px", height: "40px", marginBottom: "10px", borderRadius: "50%", backgroundColor: "blue", color: "white", textAlign: "center", margin: "auto" }}>10</h1>


                </Paper>
            </Grid>
        </div>




</div>

    );
}
