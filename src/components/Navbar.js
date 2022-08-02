import React, { useState } from "react";
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
import { Button } from "@mui/material";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/spoon1.png";
import logo2 from "../img/yummy.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [anchorEl, setAnchorEl] = React.useState(null);

 const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }
  const onLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onLogin = () => {
    navigate("/login");
  };
  const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('searched/'+input);
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
   
      <AppBar position="static">
        <Toolbar>
        <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
            <img src={logo} alt="" className="gambarLogo" />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo2} alt="" className="gambarLogo2" />
          </Typography>
          <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
          {user ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ color: "wgite" }} />
               
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
                <MenuItem onClick={onLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
             
              <Button sx={{color: "white"}} onClick={onLogin}>
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const FormStyle = styled.form`

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: #494949;
    font-size: 1.5rem;
    color: #ffffff;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #ffffff;
  }
`;


export default Navbar;