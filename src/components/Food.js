import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Food = ({ food, onPress }) => {

  console.log("SELECTED FOOD", food)

  const handlePress = () => {
    onPress(food);
  };

  return (
    <Card sx={{ width: '300px', margin: '10px' }}>
      <CardMedia component="img" alt={food.name} height="200" image={food.image} />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}>
          {food.name}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Valor: {food.value}
        </Typography>
        <Button
          onClick={handlePress}
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
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
};

export default Food;