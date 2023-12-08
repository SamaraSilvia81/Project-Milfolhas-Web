import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch } from 'react-redux';
import { fetchUser } from '../api/user';

const defaultTheme = createTheme();

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleLogin = async () => {
    try {
      const response = await fetchUser(username, password, dispatch);
      if (response) {
        navigate('/Hero');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Seu login ou senha estão incorretos');

      // Limpar a mensagem de erro após 5 segundos
      setTimeout(() => {
        setErrorMessage('');
      }, 1500);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={5} component={Box} elevation={6} square>
          <Box
            sx={{
              my: 22,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {errorMessage && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMessage}
              </Alert>
            )}
            <Typography component="h1" variant="h3">
              Totem de Atendimento
            </Typography>
            <Typography 
              component="h2" 
              variant="h5" 
              mt={1} 
              mb={3} 
              style={{ color: '#f90636' }}
            >
              Made by FiveTech
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                variant="outlined"
                fullWidth
                id="username"
                label="Username"
                value={username}
                onChange={handleInputChange(setUsername)}
                sx={{ mb: 2 }}
              />
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={handleInputChange(setPassword)}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: '#f90636' }}
                onClick={handleLogin}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/featured/?food)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}

export default LoginScreen;