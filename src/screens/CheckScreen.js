import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItemsByListId } from '../api/food';
import { useQuery } from '@tanstack/react-query';
import Check from '../components/Check';

const CheckScreen = () => {
  const navigate = useNavigate();
  const { value, quantity } = useParams();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { isLoading, error } = useQuery({
    queryKey: ['AppTotem'],
    queryFn: fetchItemsByListId,
  });

  if (isLoading) {
    return (
      <Box sx={styles.loadingContainer}>
        <Typography>Loading</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={styles.errorContainer}>
        <Typography>Error: {error.message}</Typography>
      </Box>
    );
  }

  if (!value || !quantity) {
    return (
      <Box sx={styles.errorContainer}>
        <Typography>No food found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <ArrowBackIcon
        sx={styles.arrowIconContainer}
        fontSize="large"
        color="primary"
        onClick={handleGoBack}
      />
      <Check price={value} quantity={quantity} />
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
    padding: '30px',
  },
  arrowIconContainer: {
    position: 'absolute',
    borderWidth: '1px',
    borderColor: '#000',
    borderRadius: '50%',
    padding: '5px',
    top: '30px',
    left: '30px',
    zIndex: 1,
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
};

export default CheckScreen;
