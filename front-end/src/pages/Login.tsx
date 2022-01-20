// react
import React, { useState } from 'react';
// router
import { useNavigate } from 'react-router-dom';
// @mui
import { Container, Typography, TextField, Box, Button, Link, Grid, FormHelperText } from '@mui/material';
// styles
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// components
import Page from '../components/Page';
// hooks
import useLogin from 'src/hooks/useLogin';
import useAuth from 'src/hooks/useAuth';
// axios
import axiosInstance from 'src/utils/axios';
// templates
import Footer from './blog-templates/Footer';

// ----------------------------------------------------------------------


export default function LandingPage() {

  const defaultValues = {
    email: "",
    password: "",
  }

  const navigate = useNavigate();

  // states
  const [isValid, setIsValid] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [message, setMessage] = useState("");

  // hooks
  const { logIn } = useAuth();
  const { form, handleChange, emailValidation } = useLogin(defaultValues);


  // submit form -> validate -> login
  const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const isEmailValid = emailValidation(form.email);
    !isEmailValid ? setEmailHelperText("Email address is invalid") : setEmailHelperText("")


    if (isEmailValid) {
      setIsValid(true)
      try {
        const result = await axiosInstance.post('/api/account/login', {
          email: form.email,
          password: form.password
        })
        if (result.status === 200) {
          console.log(result);
          logIn(result.data.accessToken)
          console.log(result.data.accessToken);
          navigate('/landing')
        }
      } catch (e) {
        // alert('there is something wrong')
        setMessage("Wrong Email or Password. Try Again.")
      }
    } else {
      setIsValid(false)
      setMessage("Wrong Email or Password. Try Again.")
    }

  }

  return (

    <Page title="Login Page">
      <Container component="main" maxWidth="xs">

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email" value={form.email} onChange={handleChange}
              autoFocus
              helperText={emailHelperText}
            />             

            <TextField
              margin="normal"
              required
              fullWidth
              name="password" value={form.password} onChange={handleChange}
              label="Password"
              type="password"
              id="password"
            />
            <FormHelperText sx={{ color: '#ff2020', textAlign: 'center' }} children={message} />
            <Button
              component="button"
              onClick={onSubmit}
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent={'center'}>
              <Grid item>
                <Link href="/register" variant="body2" color="secondary">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer />
      </Container>
    </Page>

  );
}


