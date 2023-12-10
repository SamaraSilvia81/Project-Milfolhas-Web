import React from 'react';
import { Box, Button,Container,Typography} from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Fedido Finalizado com Sucesso !!!
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Cliente: {clientName}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Valor total: R$ {cartTotal}
          </Typography>

          <Button
            variant="contained"
            sx={{
              ...styles.fakeButton,
              '&:hover': {
                backgroundColor: '#A08837', // Cor diferente para o hover
              },
            }}
            onClick={() => navigate('/Hero')}
          >
            Finalizar
          </Button>

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
          <Container maxWidth="sm">
            <Typography variant="body1" style={styles.footer}>
              Mil Folhas | Totem de Atendimento
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  content: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  appBar: {
    backgroundColor: '#C0AA4D',
  },
  pageTitle: {
    fontSize: 30,
    marginTop: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  fakeButton: {
    width: '30%',
    borderRadius: 40,
    backgroundColor: '#C0AA4D',
    marginTop: '2rem',
  },
  footer:{
    color: '#fff'
  }
};

export default CheckScreen;