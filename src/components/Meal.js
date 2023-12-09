import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const Meal = ({ meal, onPress }) => {
  const handlePress = () => {
    onPress(meal);
  };

  // Gere uma URL única para cada refeição usando o id
  const imageUrl = `https://source.unsplash.com/345x140/?food&${meal.id}`;

  return (
    <Card sx={{ maxWidth: 345, margin: '10px', cursor: 'pointer' }} onClick={handlePress}>
      <CardMedia component="img" alt={meal.name} height="140" image={imageUrl} />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}>
          {meal.name}
        </Typography>
        {/* <Typography variant="subtitle1" color="textSecondary">
          Estudar é muito importante, mas o lazer é crucial no equilíbrio da vida, sendo ele também uma forma de abstração de conteúdo...
        </Typography> */}
        <Button
          variant="contained"
          onClick={handlePress}
          sx={{
            backgroundColor: '#C0AA4D',
            '&:hover': {
              backgroundColor: '#A8953A', // Altere para a cor desejada no hover
            },
            width: '150px',
            mt: 2, // Adicione um espaçamento superior ao botão
            ml: 8, // Centralize horizontalmente o botão
          }}
        >
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
};

export default Meal;