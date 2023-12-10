import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = ({ cart, onPress }) => {

  const [, forceUpdate] = useState(); // Cria um estado local para forçar a atualização

  const handleDeleteCartPress = () => {
    onPress(cart);
    // Força a atualização da página
    forceUpdate((prev) => !prev);
  };

  return (
    <Card sx={{ width: '300px', margin: '10px' }}>
      <CardMedia component="img" alt={cart.name} height="200" image={cart.image} />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}>
          {cart.name}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          R$ {cart.value} {`(${cart.quantity} und)`}
        </Typography>
        <Button
          onClick={handleDeleteCartPress}
          variant="contained"
          sx={{
            backgroundColor: '#C0AA4D',
            '&:hover': {
              backgroundColor: '#A8953A',
            },
            width: '150px',
            marginTop: 2,
            marginLeft: 7,
          }}
        >
          <DeleteOutlineIcon />
          Deletar
        </Button>
      </CardContent>
    </Card>
  );
};

export default Cart;