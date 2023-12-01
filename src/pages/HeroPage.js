import React from 'react';
import { Box, Button, Avatar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

function HeroPage() {
  
  const navigation = useNavigate();

  const handleStart = () => {
    navigation('/home');
  };

  return (
    <Box style={styles.container}>
      {/* <StatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={false} networkActivityIndicatorVisible={true} /> */}
      <Avatar
        alt="Logo"
        src={require('../assets/logo.png')}
        style={{ width: 350, height: 350 }}
      />
      <Box style={styles.actions}>
        <Button
          variant="contained"
          style={styles.button}
          onClick={handleStart}
        >
          Iniciar
        </Button>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '100vh',
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: "#BEAD64"
  }
};

export default HeroPage;