import React, { useState } from 'react';
import { Button, Typography, Paper, Container, Avatar } from '@mui/material';
import { styled } from '@mui/system';  // Importação atualizada
import { useNavigate  } from 'react-router-dom';
import { ConfirmationNumberSharp } from '@material-ui/icons';

const Confirm = ({ food }) => {

  const classes = useStyles();
  const navigation = useNavigate();

  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleCardPress = () => {

    setIsButtonPressed((prevState) => !prevState);
    console.log("BORA PAGARRRRR");

    navigation.push('/check', {
      value: food.value,
      quantity: food.quantity,
    });
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.card}>
        <div className={classes.content}>
          <div className={classes.avatarContainer}>
            <Avatar src={food.image} alt={food.foodname} sx={{ width: 350, height: 250 }} />
          </div>
          <div className={classes.detailsOrder}>
            <Typography className={classes.quantity} variant="h6">
              Quantidade: {food.quantity}
            </Typography>
            <Typography className={classes.name} variant="h6">
              Prato: {food.foodname}
            </Typography>
          </div>
          <div className={classes.tagContainer}>
            <Typography className={classes.tagText} variant="h5">
              Preço: R$ {food.value}
            </Typography>
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            variant="contained"
            className={classes.confirm}
            onClick={handleCardPress}
          >
            Confirmar Pedido
          </Button>
        </div>
        <div className={classes.actions2}>
          <Button
            variant="contained"
            className={classes.cancel}
            onClick={() => navigation.push('/home')}
          >
            Cancelar Pedido
          </Button>
        </div>
      </Paper>
      <div className={classes.lineBottom} />
    </Container>
  );
};

const useStyles = styled((theme) => ({
  container: {
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
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
  },
  avatarContainer: {
    marginBottom: theme.spacing(5),
  },
  detailsOrder: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    textAlign: 'justify',
  },
  name: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: theme.typography.h6.fontSize,
    marginBottom: theme.spacing(2),
  },
  tagContainer: {
    display: 'flex',
    justifyContent: 'center',
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
  actions: {
    position: 'absolute',
    top: '115%',
    right: theme.spacing(-2),
    borderRadius: theme.spacing(4),
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: theme.shadows[5],
  },
  actions2: {
    position: 'absolute',
    top: '115%',
    left: theme.spacing(-2),
    borderRadius: theme.spacing(4),
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: theme.shadows[5],
  },
  confirm: {
    width: '100%',
    borderRadius: theme.spacing(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#C0AA4D",
  },
  cancel: {
    width: '100%',
    borderRadius: theme.spacing(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A234B',
  },
}));

export default Confirm;