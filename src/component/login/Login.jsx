import { Alert, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import jwt_decode from "jwt-decode";
import Admin from '../AdminSidebar/Admin';

function Login() {

    const [open, setOpen] = React.useState(false);
    const [msg,setMsg]=useState()
    const navigate=useNavigate();

    const init = {
       
        email: "",
        password: "",
       
    };
    const [user, setUser] = useState(init)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = user;

        fetch("https://localhost:7268/api/Authentication/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                
                email,
               

                password,
                
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                <Admin data={data} />
                
                const user =  jwt_decode(data);
                //  var role = JSON.parse(user);
                 console.log(user.role);
                
                setOpen(true)
                if(user.role==="Manager"){
                    navigate("/ManagerDash")
                }else if(user.role==="sales"){
                    navigate("/salesdash")
                }
                else if(user.role==="customer"){
                    navigate("/body")
                }
            });
      

    }

    return (
        <Paper sx={{ margin: "50px", }} elevation={3}>

            <Paper sx={{ textAlign: "center", padding: "10px", backgroundColor: "#1976d2", color: "white" }} elevation={3}>LOGIN</Paper>
            <div style={{ display: "flex", width: "80%", margin: "auto" }}>

                <Grid container spacing={2} sx={{ margin: "30px", }}>
                   
                    <Grid item xs={12}>
                        <TextField onChange={handleChange} name="email"
                            value={user.email}

                            label={"Email"} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={handleChange} name="password"
                            value={user.password}
                            type="password"
                            label={"Password"} />
                    </Grid>
                  


                </Grid>

                <div sx={{ marginTop: "50px" }}>
                    <img width={"400px"} height={"350px"} src="https://us.123rf.com/450wm/jirsak/jirsak1707/jirsak170700007/82255755-cybersecurity-and-information-technology-security-services-concept-login-or-sign-in-internet-concept.jpg?ver=6" />
                </div>
            </div>
            <Grid sx={{ width: "20%", margin: "auto",display:"flex" }}>

            
                <Button
                
                onClick={handleSubmit} sx={{ marginTop: "50px", marginBottom: "50px" }} variant='contained'>Login</Button>
           {/* <div style={{marginTop:"35px"}}>

           <Link to="forgot-password" style={{textDecoration:"none"}}>
           
            <Button>Forgot Password</Button>
           </Link>
           </div> */}
            </Grid>
           
            {open?<Alert severity="success">{msg}</Alert>:null}
            
        </Paper >
    )
}

export default Login
