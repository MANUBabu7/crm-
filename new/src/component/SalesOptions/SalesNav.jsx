import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';



import { Button, FormControl, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/Sidebar';

export default function SalesNav() {
    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}

                        >

                            <Link to="/salesenq" style={{ textDecoration: "none", color: "white" }}>

                                Home
                            </Link>

                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
                            Salas Team
                        </Typography>



                    </Toolbar>
                </AppBar>
            </Box>
            {/* <SideBar/> */}
           
        </div>
    );
}
