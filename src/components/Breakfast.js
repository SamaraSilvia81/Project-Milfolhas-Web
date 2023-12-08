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
        <Typography variant="h6" component="div" sx={{ marginBottom: '10px' }}>
          {breakfast.name}
        </Typography>
        <Button onClick={handlePress} variant="contained" color="primary">
          Ver Detalhes
        </Button>
      </CardContent>
    </Card>
  );
};

export default Breakfast;
