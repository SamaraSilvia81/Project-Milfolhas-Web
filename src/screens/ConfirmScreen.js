import React from 'react';
import { Box, CircularProgress, IconButton, Paper, Typography, AppBar, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Confirm from '../components/Confirm';
import { fetchItemsByListId } from '../api/food';

const ConfirmScreen = () => {
  const navigate = useNavigate();

  const { selectedFood } = useParams();
  const serializedFood = decodeURIComponent(selectedFood);
  const food = JSON.parse(serializedFood);

  const userId = useSelector((state) => state.auth.userId);

  const handleGoBack = () => {
    navigate(-1);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["AppTotem", userId],
    queryFn: () => fetchItemsByListId(userId, food.list_id),
    onError: (err) => console.error("Erro na query:", err),
  });

  if (isLoading) {
    return (
      <Box style={styles.loadingContainer}>
        <CircularProgress size={50} />
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

  if (!selectedFood) {
    return (
      <Box style={styles.errorContainer}>
        <Typography>No food found</Typography>
      </Box>
    );
  }

  return (
    <Box style={styles.container}>
      <AppBar position="static" style={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Confirm</Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} style={styles.paper}>
        <Confirm food={food} />
      </Paper>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    minHeight: '100vh',
  },
  appBar: {
    backgroundColor: '#C0AA4D',
  },
  paper: {
    padding: '30px',
    marginTop: '20px',
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

export default ConfirmScreen;
