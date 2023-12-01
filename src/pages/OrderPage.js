import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Order from '../components/Order';
import { fetchItemsByListId } from '../service/food';

function OrderPage({ match }) {
  
  const userId = useSelector((state) => state.auth.userId);
  const { foodId } = match.params;

  const navigation = useNavigate();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const { isLoading, error, data } = useQuery(['AppTotem', userId], () =>
    fetchItemsByListId(userId, foodId)
  );

  if (isLoading) {
    return (
      <Box style={styles.loadingContainer}>
        <Typography>Loading</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box style={styles.errorContainer}>
        <Typography>Error: {error.message}</Typography>
      </Box>
    );
  }

  return (
    <Box style={styles.container}>
      <Box style={styles.arrowIconContainer}>
        <IconButton
          edge="start"
          color="inherit"
          style={styles.arrowIconContainer}
          onClick={handleGoBack}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

      <Box style={styles.avatarContainer}>
        <img
          src={require('../assets/logo.png').default}
          alt="Logo"
          style={{ width: 120, height: 120 }}
        />
      </Box>

      <Box style={{ flex: 1 }}>
        {data.find((item) => item.id === foodId) && (
          <Order food={data.find((item) => item.id === foodId)} />
        )}
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    padding: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
  },
  avatarContainer: {
    position: 'absolute',
    top: 5,
    right: 30,
    borderColor: 'transparent',
  },
  arrowIconContainer: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 100,
    padding: 5,
    top: 30,
    left: 30,
    zIndex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default OrderPage;