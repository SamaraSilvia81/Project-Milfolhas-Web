import React from 'react';
import { Button, Container, CssBaseline, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'; // Importe sua imagem corretamente

function HeroScreen() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <img src={logo} alt="Logo" style={{ width: 350, height: 350, marginTop:5 }} />
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
        >
          <Box sx={{ marginTop: 2 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#BEAD64" }}
              component={Link}
              to="/Home"
            >
              Iniciar
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default HeroScreen;