import React from 'react';
import { Button, Typography, Paper, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';  // Importação atualizada

const Meal = ({ meal, onPress }) => {
  
  console.log("Componente Meal", meal.name);
  console.log("MEAL", meal);

  const classes = useStyles();

  const handlePress = () => {
    console.log("ENTROU MONA", meal);
    onPress(meal);
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.card}>
        <Card className={classes.item} onClick={handlePress}>
          <CardContent>
            <div className={classes.textContainer}>
              <Typography variant="h4" className={classes.titleItem}>
                {meal.name}
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
    color: '#000',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default Meal;