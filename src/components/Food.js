import React from 'react';
import { Button, Typography, Paper, Container, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';  // Importação atualizada
import { useNavigate } from 'react-router-dom';

const Food = ({ food, onPress }) => {
  
  console.log("food", food);

  const classes = useStyles();
  const navigation = useNavigate();

  return (
    <Container className={classes.container}>
      <Paper className={classes.card}>
        <Card className={classes.item} onClick={() => onPress(food)}>
          <CardMedia
            component="img"
            alt={food.name}
            height="210"
            image={food.image}
          />
          <CardContent>
            <div className={classes.textContainer}>
              <Typography variant="h4" className={classes.titleItem}>
                {food.name}
              </Typography>
              <Typography variant="h4" className={classes.titleItem}>
                {food.value}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
};

const useStyles = styled((theme) => ({
  container: {
    flex: 1,
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  item: {
    borderRadius: theme.spacing(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  titleItem: {
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default Food;