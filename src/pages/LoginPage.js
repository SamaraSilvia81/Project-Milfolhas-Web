import React, { useState } from 'react';
import { Box, TextField, Typography, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../service/user';

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault(); 

    console.log("LOGNNNNN")

    try {
      const response = await fetchUser(username, password, dispatch);
      console.log(response);

      if (response) {
        navigation('/hero');
        setUsername('');
        setPassword('');
        setError('');
      }
    } catch (error) {
      console.error(error);
      setError('Seu login ou senha estão incorretos');
    }
  };

  return (
    <Box style={styles.container}>

      {/* <StatusBar  
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={false}
        networkActivityIndicatorVisible={true}
      /> */}

      <Box style={styles.header}>
        <Typography variant="h4" style={styles.title}>
          Totem de Atendimento
        </Typography>
        <Typography variant="subtitle1" style={styles.subtitle}>
          made for fivetechsolutions
        </Typography>
      </Box>

      <Box style={styles.formLogin}>
        <TextField
          label="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setError('')}
          style={styles.input}
        />
        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setError('')}
          style={styles.input}
        />
        {/* <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleLogin} 
          style={styles.buttonLogin}
        >
          <Button variant="contained" style={styles.buttonLoginText}>Login</Button>
        </TouchableOpacity> */}
        <Button
          variant="contained"
          style={styles.buttonLogin}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>

      {errorMessage !== '' && <Typography style={styles.errorText}>{errorMessage}</Typography>}

    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23232a',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
  },
  formLogin: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '90%',
    color: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    padding: '0 10px',
    backgroundColor: 'transparent',
  },
  buttonLogin: {
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: "#CF2422",
  },
  buttonLoginText: {
    fontSize: 16,
    color: '#fff',
  },
  errorText: {
    color: '#EF7377',
    marginTop: 10,
  },
};

export default LoginPage;
