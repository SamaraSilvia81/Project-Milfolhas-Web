import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';

const Confirm = ({ food }) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const navigate = useNavigate();

  const handleCardPress = () => {
    setIsButtonPressed((prevState) => !prevState);
    navigate('/Fake');
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.card}>
        <Box sx={styles.content}>
          <Box sx={styles.avatarContainer}>
            <img src={food.image} alt="Food Image" style={styles.image} />
          </Box>
          <Box sx={styles.detailsOrder}>
            <Typography variant="h5" sx={styles.quantity}>
              Quantidade: {food.quantity}
            </Typography>
            <Typography variant="h5" sx={styles.name}>
              Prato: {food.name}
            </Typography>
          </Box>
          <Box sx={styles.tagContainer}>
            <Typography variant="h5" sx={styles.tagText}>
              Preço: R$ {parseInt(food.value) * food.quantity}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.actionsContainer}>
          <Button variant="contained" sx={styles.confirm} onClick={handleCardPress}>
            Confirmar Pedido
          </Button>
          <Button
            variant="contained"
            sx={styles.cancel}
            onClick={() => navigate('/Home')}
          >
            Cancelar Pedido
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
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    minHeight: '100vh',
  },
  card: {
    marginTop: 15,
    position: 'relative',
    width: 320,
  },
  content: {
    alignItems: 'center',
    padding: '20px',
  },
  avatarContainer: {
    marginBottom: 5,
  },
  image: {
    width: 350,
    height: 250,
  },
  detailsOrder: {
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 20,
    marginBottom: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    padding: '15px 20px',
    margin: '0 5px',
  },
  tagText: {
    fontSize: 16,
    textAlign: 'center',
  },
  lineBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 160,
    backgroundColor: '#23232e',
    zIndex: -1,
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '115%',
    left: 0,
    right: 0,
    padding: '0 20px',
  },
  confirm: {
    flex: 1,
    marginRight: '10px',
    borderRadius: 40,
    backgroundColor: '#C0AA4D',
  },
  cancel: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: '#2A234B',
  },
};

export default Confirm;
