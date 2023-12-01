import React, { useState } from 'react';
import { Button, Typography, Paper, Container, Avatar, IconButton } from '@mui/material';
import Icon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/system';  // Importação atualizada
import { useNavigate } from 'react-router-dom';

export const Order = ({ food }) => {

  const classes = useStyles();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [counter, setCounter] = useState(0);
  
  const navigation = useNavigate();

  const handleCardPress = () => {
    setIsButtonPressed((prevState) => !prevState);

    const selectedFood = {
      objectId: food.id,
      foodname: food.name,
      value: food.value,
      image: food.image,
      quantity: counter,
    };

    navigation.navigate('Confirm', { selectedFood });
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.card}>
        <div className={classes.content}>
          <div className={classes.avatarContainer}>
            <Avatar alt={food.name} src={food.image} sx={{ width: 220, height: 220 }} />
          </div>
          <div className={classes.detailsContainer}>
            <div className={classes.nameContainer}>
              <Typography variant="h5" className={classes.name}>
                {food.name}
              </Typography>
            </div>
            <div className={classes.descriptionContainer}>
              <Typography variant="h6" className={classes.descriptionTitle}>
                Ingredientes
              </Typography>
              {/* <Typography className={classes.description}>{food.about}</Typography> */}
              <Typography className={classes.tagText}>asdjkasdijewjj</Typography>
            </div>
          </div>
          <div className={classes.tagContainer}>
            <div className={classes.tagItem}>
              <Typography variant="h5" className={classes.tagText}>
                Preço: R${food.value}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.order}>
          <Typography className={classes.text}>Quantidade do Pedido</Typography>
          <div className={classes.quantity}>
            <Button className={classes.minus} variant="contained" onClick={decrement}>
              -
            </Button>
            <Typography className={classes.result}>{counter}</Typography>
            <Button className={classes.push} variant="contained" onClick={increment}>
              +
            </Button>
          </div>
        </div>
        <div className={classes.actions}>
          <IconButton
            className={`${classes.button} ${isButtonPressed && classes.buttonPressed}`}
            onClick={handleCardPress}
          >
            <Icon fontSize="large" color="white" />
          </IconButton>
        </div>
      </Paper>
      <div className={classes.lineBottom} />
    </Container>
  );
};

const useStyles = styled((theme) => ({
  container: {
    flex: 1,
    padding: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    position: 'relative',
  },
  avatarContainer: {
    position: 'absolute',
    top: -90,
    right: '60%',
    alignItems: 'center',
  },
  detailsContainer: {
    marginTop: 120,
    width: '100%',
    textAlign: 'justify',
  },
  nameContainer: {
    position: 'absolute',
    top: -120,
    left: '60%',
    width: '50%',
  },
  name: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    textAlign: 'center',
  },
  descriptionContainer: {
    marginVertical: theme.spacing(2),
  },
  descriptionTitle: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    textAlign: 'justify',
  },
  description: {
    fontSize: theme.typography.h6.fontSize,
    textAlign: 'justify',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tagItem: {
    backgroundColor: '#F2F2F2',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    margin: theme.spacing(1),
  },
  tagText: {
    fontSize: theme.typography.h5.fontSize,
    textAlign: 'center',
  },
  lineBottom: {
    position: 'absolute',
    bottom: 0,
    width: '120%',
    height: theme.spacing(20),
    backgroundColor: '#23232e',
    zIndex: -1,
  },
  order: {
    position: 'absolute',
    top: '116%',
  },
  quantity: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  push: {
    backgroundColor: 'transparent',
  },
  minus: {
    backgroundColor: 'transparent',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: theme.spacing(1),
  },
  result: {
    textAlign: 'center',
    color: '#fff',
    marginTop: theme.spacing(1),
    marginHorizontal: theme.spacing(2),
    fontSize: theme.typography.h5.fontSize,
  },
  actions: {
    position: 'absolute',
    top: '100%',
    right: -theme.spacing(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing(4),
    width: theme.spacing(10),
    height: theme.spacing(10),
    boxShadow: theme.shadows[5],
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: theme.spacing(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
  buttonPressed: {
    backgroundColor: theme.palette.info.main,
  },
}));

export default Order;