import React, {useState, useEffect} from 'react';
import { IconButton, Paper, Typography, AppBar, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useSelector } from 'react-redux';
import { useQuery } from "@tanstack/react-query";
import { fetchItemsByListId } from "../api/food";
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import Order from "../components/Order";

const OrderScreen = () => {

  const [foodData, setFoodData] = useState([]);

  const userId = useSelector((state) => state.auth.userId);
  const { orderName, orderId } = useParams(); // Use `useParams` para obter parâmetros da URL

  const navigate = useNavigate();
  const location = useLocation(); // Utilize useLocation para acessar o estado passado

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['AppTotem', userId],
    queryFn: () => fetchItemsByListId(userId, orderId),
    onError: (err) => console.error('Erro na query:', err),
    staleTime: 10000,
  });

  const order = location.state.foodData;
  
  useEffect(() => {
    if (data) {
      setFoodData(data);
    }
  }, [data]);;
  
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={styles.container}>
      {isFetching && <p>IS FETCHING</p>}
      <AppBar position="static" style={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Pedido: {orderName}</Typography>
        </Toolbar>
      </AppBar>
      {data && data.length > 0 && <Order order={order} />}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
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

export default OrderScreen;