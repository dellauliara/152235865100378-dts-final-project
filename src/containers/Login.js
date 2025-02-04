import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {  signInWithEmailAndPassword } from "firebase/auth";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../config/firebase';
import { Alert } from '@mui/material';
import logo from "../img/google.png";


const Login = () => {
    const navigate = useNavigate();
   
    const [errorMessage, setErrorMessage] = React.useState('');
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get('email');
      const password = data.get('password');
      
      try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/");
      } catch (error) {
          setErrorMessage(error.message);
      }
  };

 

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    mt: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                {errorMessage?<Alert severity='error'>{errorMessage}</Alert>:<></>}
                            
                    
             
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        className="btn"
                    >
                        Sign In
                    </Button>
                    <Button
                        onClick={signInWithGoogle}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        className="btn"
                    >
                        <img src={logo} alt="" className='logoG'/>
                        Sign In with Google
                    </Button>

                    <Grid container sx={{mb:48}}>
                        <Grid item>
                            <Typography color='secondary' >
                            Don't have an account? 
                                <Link to="/register" className='link'>
                                {" Sign Up"}
                            </Link></Typography>
                            
                        </Grid>
                        
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
