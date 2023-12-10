// Confirm.jsx
import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearCart } from '../redux/actions/cartActions'; // Importe a ação correta para limpar o carrinho

const Confirm = ({ food }) => {

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMoreOrderPress = () => {
    navigate('/Home')
  }

  console.log("MEU CARRINHO", cartItems)

  const handleCardPress = () => {
    navigate('/Cart');
  };

  const handleCancelOrder = () => {
    dispatch(clearCart()); // Dispatch a ação para limpar o carrinho
    console.log("LIMPEI MEU CARRINHO")
    navigate('/Home');
  };

  return (
    <div>
      <Card style={{ width: '500px', marginTop: '30px' }}>
        <CardMedia component="img" alt={food.name} height="200" image={food.image} />

        <CardContent>

          <Typography style={{ fontSize: 30, marginBottom: '2px', color: '#333' }}>
            {food.name}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            R$ {food.value}
          </Typography>

          <Box sx={styles.tagContainer}>
            <Typography variant="h5" sx={styles.tagText}>
              Preço Total: R$ {food.total}
            </Typography>
          </Box>

          <Box sx={styles.actionsContainer}>
            <Button variant="contained" sx={styles.cancel} onClick={handleCancelOrder}>
              Cancelar Pedido
            </Button>
            <Button variant="contained" sx={styles.confirm} onClick={handleCardPress}>
              Confirmar Pedido
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Background Box with Text and Button */}
      <Box
        sx={{
          backgroundColor: '#23232a',
          textAlign: 'center',
          padding: '20px',
          marginTop: '20px',
        }}
      >
        <Typography variant="body1" sx={{ color: '#fff', marginTop: '10px' }}>
          Deseja adicionar algo mais?
        </Typography>
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            width: '40%',
            height: '40px',
            backgroundColor: '#f90636',
            '&:hover': {
              backgroundColor: '#e60032', // Cor diferente para o hover
            },
          }}
          onClick={handleMoreOrderPress}
        >
          Acompanhamentos
        </Button>
      </Box>
    </div>
  );
};

const styles = {
  card: {
    width: 350,
  },
  name: {
    margin: '5px 0',
  },
  tagContainer: {
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    width: '60%',
    padding: '15px 20px', // Adjusted padding
    margin: '25px auto', // Centered the container horizontally
  },
  tagText: {
    fontSize: 16,
    textAlign: 'center',
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'center', // Center the buttons
    marginTop: '20px',
  },
  confirm: {
    marginLeft: '10px',
    backgroundColor: '#C0AA4D',
  },
  cancel: {
    backgroundColor: '#2A234B',
  },
};

export default Confirm;