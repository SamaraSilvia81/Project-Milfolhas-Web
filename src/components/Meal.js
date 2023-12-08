import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Meal({ meal, onPress }) {
  const handlePress = () => {
    onPress(meal);
  };

  const mealStyle = {
    marginBottom: '8px',
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '16px',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#fff',
  };

  return (
    <Paper onClick={handlePress} style={mealStyle}>
      <Box>
        <Typography variant="h6" style={titleStyle}>
          {meal.name}
        </Typography>
      </Box>
    </Paper>
  );
}

export default Meal;
