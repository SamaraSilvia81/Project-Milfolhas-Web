import React, {useState, useEffect} from 'react';
import { Box, CircularProgress, IconButton, Paper, Typography, AppBar, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Confirm from '../components/Confirm';
import { fetchItemsByListId } from '../api/food';

const ConfirmScreen = () => {

  const [foodData, setFoodData] = useState([]);
  const userId = useSelector((state) => state.auth.userId);
  
  const navigate = useNavigate();
  const { selectedFood } = useParams();

  console.log("SELECTED FOOD", selectedFood);

  // Decodifique os dados aqui, pois você os codificou antes de passá-los na URL
  const decodedSelectedFood = JSON.parse(decodeURIComponent(selectedFood));
  console.log("DECODED SELECTED FOOD", decodedSelectedFood);

  const handleGoBack = () => {
    navigate(-1);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["AppTotem", userId],
    queryFn: () => fetchItemsByListId(userId, decodedSelectedFood.id),
    onError: (err) => console.error("Erro na query:", err),
  });

  useEffect(() => {
    if (data) {
      setFoodData(data);
    }
  }, [data]);;

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

  if (!decodedSelectedFood) {
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
          <Typography variant="h6">Confirmar Pedido</Typography>
        </Toolbar>
      </AppBar>
      <Confirm food={decodedSelectedFood} />
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
    backgroundColor: '#2a2419',
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
