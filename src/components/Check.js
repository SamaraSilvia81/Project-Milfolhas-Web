import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Check = ({ price, quantity }) => {
  const navigate = useNavigate();
  const priceConverted = parseFloat(price);

  const handleFinishOrder = () => {
    navigate('/Home');
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.card}>
        <Box sx={styles.content}>
          <Box sx={styles.detailsOrder}>
            <Typography variant="h6" fontWeight="bold" marginBottom="20px">
              Informe seu nome
            </Typography>
            <Typography sx={styles.span} variant="h6">
              Samara Silvia
            </Typography>
          </Box>
          <Box sx={styles.tagContainer}>
            <Typography sx={styles.tagText} variant="h6">
              Preço: R$ {priceConverted * quantity}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.actions}>
          <Button
            variant="contained"
            sx={styles.confirm}
            onClick={handleFinishOrder}
          >
            Finalizar Pedido
          </Button>
        </Box>
      </Box>
      <Box sx={styles.lineBottom} />
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  },
  card: {
    marginTop: '30px',
    position: 'relative',
  },
  content: {
    alignItems: 'center',
    textAlign: 'center',
  },
  detailsOrder: {
    marginBottom: '50px',
  },
  span: {
    borderWidth: '1px',
    borderColor: '#000',
    padding: '2px',
    marginLeft: '5px',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: '20px',
    padding: '15px',
    margin: '5px',
  },
  tagText: {
    textAlign: 'center',
  },
  lineBottom: {
    position: 'absolute',
    bottom: '0',
    width: '120%',
    height: '160px',
    backgroundColor: '#23232e',
    zIndex: -1,
  },
  actions: {
    position: 'absolute',
    top: '180%',
    left: '100px',
    borderRadius: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  },
  confirm: {
    width: '120%',
    borderRadius: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0AA4D',
  },
};

export default Check;
