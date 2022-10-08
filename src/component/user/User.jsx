import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Box,  IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'
import Login from '../BtnComponent/Login'
import Logout from '../BtnComponent/Logout'


function User() {

   
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
 
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
  
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    const { user } = useAuth0();

  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user" src={user?.picture} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Login/>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Logout/>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
             
                <MenuItem  onClick={handleCloseUserMenu}>
               
                </MenuItem>
       
                  
                </MenuItem>
            
            </Menu>
          </Box>
    </div>
  )
}

export default User
