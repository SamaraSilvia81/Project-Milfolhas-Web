import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';


const Breakfast = ({ breakfast, onPress }) => {
  const handlePress = () => {
    onPress(breakfast);
  };

  return (
    <Card sx={{ width: '250px', margin: '10px' }}>
      <CardMedia component="img" alt={breakfast.name} height="140" image={breakfast.image} />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}>
          {breakfast.name}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Valor: {breakfast.value}
        </Typography>
        <Button
          onClick={handlePress}
          variant="contained"
          sx={{
            backgroundColor: '#C0AA4D',
            '&:hover': {
              backgroundColor: '#A8953A', // Altere para a cor desejada no hover
            },
            width: '150px',
            marginTop: 2, // Adicione um espaçamento superior ao botão
            marginLeft: 4, // Centralize horizontalmente o botão
          }}
        >
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
};

export default Breakfast;
