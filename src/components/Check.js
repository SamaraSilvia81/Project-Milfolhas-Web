import React from 'react';
import { Button, Typography, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';  // Importação atualizada
import { useNavigate } from 'react-router-dom';

const Check = ({ price, quantity }) => {

  const classes = useStyles();
  const navigation = useNavigate();

  const priceConverted = parseFloat(price);

  console.log("BORA CHECKKKKKKK");

  return (
    <Container className={classes.container}>
      <Paper className={classes.card}>
        <div className={classes.content}>
          <div className={classes.detailsOrder}>
            <Typography className={classes.name} variant="h6">
              Informe seu nome
            </Typography>
            <Typography className={classes.span} variant="h4">
              Samara Silvia
            </Typography>
          </div>
          <div className={classes.tagContainer}>
            <Typography className={classes.tagText} variant="h5">
              Preço: R$ {priceConverted * quantity}
            </Typography>
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            variant="contained"
            className={classes.confirm}
            onClick={() => navigation.push('/home')}
          >
            Finalizar Pedido
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
  detailsOrder: {
    marginBottom: theme.spacing(5),
    textAlign: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  span: {
    border: '1px solid #000',
    padding: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
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
    top: '180%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: theme.spacing(4),
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: theme.shadows[5],
  },
  confirm: {
    width: '100%',
    borderRadius: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: '#C0AA4D',
  },
}));

export default Check;