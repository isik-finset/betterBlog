// react
import React, { useState } from 'react';
// router
import { useNavigate } from 'react-router-dom';
// @mui
import { Container, Typography, TextField, Box, Button, Link, Grid } from '@mui/material';
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

// Guards : done
// useReducer
// improve router : done
// validation - login regex : done



// 1: when page reloads, keep the user data! adjust context provider
// 2. move fetch login from login page to context and make a function that can be user in login page
// 3. remove token 
// 4. improve validation  

// new


export default function LandingPage() {

  const defaultValues = {
    email: "",
    password: "",
  }

  const navigate = useNavigate();

  // states
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  // hooks
  const { logIn } = useAuth();
  const { form, handleChange, emailValidation } = useLogin(defaultValues);
  //const { errors, isValid } = useForm(initValues, validationSchema)
  // { name: { isRequired: true,  }, email: { isRequied: true, isEmail: true } }



  // submit form -> validate -> login
  const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const isEmailValid = emailValidation(form.email);
    isEmailValid ? setMessage("Email address is valid") : setMessage("Email address is invalid")



    if (isEmailValid) {
      setIsValid(true)
      // logIn(form)
      try {
        const result = await axiosInstance.post('/api/account/login', {
          email: form.email,
          password: form.password
        })
        if (result.status === 200) {
          console.log(result);
          logIn(result.data.accessToken)
          console.log(result.data.accessToken);
          // navigate('/user-profile')
          navigate('/landing')
        }
      } catch (e) {
        alert('there is something wrong')
      }
    } else {
      setIsValid(false)
    }

  }
  // https://medium.com/geekculture/how-to-use-context-api-and-jwt-to-maintain-user-sessions-eb5602e83a03

  return (
    // <Page title="Login Page">
    //   <Container sx={{ my: 4 }}>
    //     <Typography variant="h3" component="h1" paragraph>
    //       Login
    //     </Typography>
    //     <Box>

    //       <Typography>
    //         Email:
    //       </Typography>
    //       <TextField name="email" value={form.email} onChange={handleChange} fullWidth />
    //       <Typography sx={{ color: isValid ? 'green' : 'red' }}>
    //         {message}
    //       </Typography>
    //       <Typography>
    //         Password:
    //       </Typography>
    //       <TextField name="password" value={form.password} onChange={handleChange} fullWidth />
    //       <Box sx={{ my: 2 }}>
    //         <Button component="button" onClick={onSubmit} fullWidth variant="contained" size="large">
    //           Submit
    //         </Button>
    //       </Box>

    //     </Box>
    //   </Container>
    // </Page>


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
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password" value={form.password} onChange={handleChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
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


