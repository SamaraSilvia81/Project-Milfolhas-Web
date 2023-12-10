import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../assets/logo.png'; // Importe sua imagem corretamente

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const CheckScreen = () => {
  
  const navigate = useNavigate();
  const clientName = useSelector((state) => state.confirm.clientName);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          justifyContent: 'center', // Centraliza o conteúdo verticalmente
        }}
      >
        <CssBaseline />

        <Container component="main" sx={{ mt: 11, mb: 2, display: 'flex', justifyContent: 'space-between' }} maxWidth="md">
          <Box width="500px">
            <Typography variant="h2" component="h1" gutterBottom>
              Pedido Finalizado com Sucesso !!!
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Cliente: {clientName}
            </Typography>
            <Typography variant="h5" component="h2">
              Valor total: <span style={{ fontWeight: 'bold' }}>R$ {cartTotal}</span>
            </Typography>
            
            <Button
              variant="contained"
              sx={{
                ...styles.fakeButton,
                alignSelf: 'flex-end', // Alinha o botão à extremidade inferior do contêiner
                '&:hover': {
                  backgroundColor: '#A08837', // Cor diferente para o hover
                },
              }}
              onClick={() => navigate('/Hero')}
            >
              Finalizar
            </Button>
          </Box>
          <img src={logo} alt="Logo" style={{ maxWidth: '300px', margin:'5%' }} />
        </Container>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: '#2a2419',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="body1" style={styles.footer}>
              Mil Folhas | Totem de Atendimento
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const styles = {
  fakeButton: {
    width: '30%',
    borderRadius: 40,
    backgroundColor: '#C0AA4D',
    marginTop: '2rem',
  },
  footer: {
    color: '#fff',
  },
};

export default CheckScreen;
