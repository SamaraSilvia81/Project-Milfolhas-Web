import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Food = ({ food, onPress }) => {
  const handlePress = () => onPress(food);

  return (
    <Card style={{ width: '250px', margin: '10px' }}>
      <CardMedia component="img" alt={food.name} height="140" image={food.image} />
      <CardContent>
        <Typography variant="h6" style={{ marginBottom: '10px' }}>
          {food.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Valor: {food.value}
        </Typography>
        <Button onClick={handlePress} variant="contained" color="primary">
          Ver Detalhes
        </Button>
      </CardContent>
    </Card>
  );
};

export default Food;
