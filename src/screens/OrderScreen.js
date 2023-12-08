import React, { useEffect, useState } from 'react';
import { CircularProgress, IconButton, Paper, Typography, AppBar, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import Order from '../components/Order';
import { fetchItemsByListId } from '../api/food';

const OrderScreen = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.userId);
  const { foodId } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['AppTotem', userId],
    queryFn: () => fetchItemsByListId(userId, foodId),
    onError: (err) => console.error('Erro na query:', err),
    staleTime: 10000,
  });

  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const food = data.find((item) => item.id === foodId);
      setSelectedFood(food);
    }
  }, [data, foodId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <CircularProgress size={50} />
        <Typography>Loading</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <Typography>Error: {error.message}</Typography>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <AppBar position="static" style={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Order</Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} style={styles.paper}>
        <Order food={selectedFood} />
      </Paper>
    </div>
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

export default OrderScreen;
