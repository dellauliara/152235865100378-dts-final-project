import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/spoon.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Search from "./Search"

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
  const onRegister = () => {
    navigate("/register");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
            <img src={logo} alt="" className="gambar" />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography> <Search/>
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
                <AccountCircle sx={{ color: "black" }} />
               
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
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
             
              <Button onClick={onLogin} >
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
