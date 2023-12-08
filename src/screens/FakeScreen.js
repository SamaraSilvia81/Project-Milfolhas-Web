import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const FakeScreen = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.navbarContainer}>
        <ArrowBackIcon sx={styles.arrowIconContainer} onClick={handleGoBack} />
      </Box>
      <Typography variant="h3" sx={styles.pageTitle}>
        Pedido Feito com Sucesso !!
      </Typography>
      <Button
        variant="contained"
        sx={styles.fakeButton}
        onClick={() => navigate('/Hero')}
      >
        Finalizar
      </Button>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    minHeight: '100vh',
  },
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 80,
    backgroundColor: '#C0AA4D',
  },
  arrowIconContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: '50%',
    padding: 5,
    marginLeft: 30,
    cursor: 'pointer',
  },
  pageTitle: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 30,
  },
  fakeButton: {
    width: '30%',
    marginTop: 30,
    borderRadius: 40,
    backgroundColor: '#C0AA4D',
  },
};

export default FakeScreen;
