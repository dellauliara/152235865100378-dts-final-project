import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import logo from "../img/spoon.png";

const Navbar = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleChange1 = (event) => {
    setAuth(event.target.value);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>


      <AppBar position="static" sx={{backgroundColor: "white"}}>
        <Toolbar>
         
             <img src={logo} alt="" className="gambar" />
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{mr:"45vh"}}
              >
                <AccountCircle sx={{color:"black"}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleChange1}>Logout</MenuItem>
              </Menu>
            </div>
          ):(<div>
            
            <Button value={auth} sx={{mr:"1vh"}}>Register</Button>
            <Button onClick={handleChange1} value={auth} sx={{mr:"45vh"}}>Login</Button>
          
         </div>)}
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;