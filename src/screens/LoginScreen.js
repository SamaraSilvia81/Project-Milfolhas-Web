import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../api/user';

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
    }
  };

  return (
    <Container sx={styles.container}>
      <Paper sx={styles.paper}>
        <Typography variant="h4" sx={styles.title}>
          Totem de Atendimento
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="Nome de Usuário"
          value={username}
          onChange={handleInputChange(setUsername)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          label="Senha"
          type="password"
          value={password}
          onChange={handleInputChange(setPassword)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={styles.loginButton}
        >
          Login
        </Button>
        {errorMessage && (
          <Typography color="error" sx={styles.errorMessage}>
            {errorMessage}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  paper: {
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    maxWidth: '400px',
  },
  title: {
    marginBottom: 2,
  },
  loginButton: {
    marginTop: 2,
    fontSize: '1.2rem',
  },
  errorMessage: {
    marginTop: 2,
  },
};

export default LoginScreen;
