import React, { useState } from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate, useParams } from 'react-router-dom';

const Order = () => {
  
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const { foodId } = useParams();
  console.log("ORDER COMIDA", foodId)

  const handleCardPress = () => {
    
    setIsButtonPressed((prevState) => !prevState);

    const selectedFood = {
      id: foodId.id,
      foodname: foodId.name,
      value: foodId.value,
      image: foodId.image,
      quantity: counter,
    };

    navigate('Confirm', { selectedFood });
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
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.content}>
          <div style={styles.avatarContainer}>
            <Avatar alt="Food Image" src={foodId.image} sx={{ width: 220, height: 220 }} />
          </div>
          <div style={styles.detailsContainer}>
            <div style={styles.nameContainer}>
              <Typography variant="h4" sx={styles.name}>
                {foodId.name}
              </Typography>
            </div>
          </div>
          <div style={styles.tagContainer}>
            <div style={styles.tagItem}>
              <Typography variant="h5" sx={styles.tagText}>
                Preço: R${foodId.value}
              </Typography>
            </div>
          </div>
        </div>
        <div style={styles.order}>
          <Typography variant="h6" sx={styles.text}>
            Quantidade do Pedido
          </Typography>
          <div style={styles.quantity}>
            <Button variant="contained" sx={styles.minus} onClick={decrement}>
              -
            </Button>
            <Typography variant="h6" sx={styles.result}>
              {counter}
            </Typography>
            <Button variant="contained" sx={styles.push} onClick={increment}>
              +
            </Button>
          </div>
        </div>
        <div style={styles.actions}>
          <Button
            variant="contained"
            sx={[styles.button, isButtonPressed && styles.buttonPressed]}
            onClick={handleCardPress}
          >
            <ShoppingCartIcon style={{ fontSize: 20, color: 'white' }} />
          </Button>
        </div>
      </div>
      <div style={styles.lineBottom} />
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginTop: 30,
  },
  content: {
    alignItems: 'center',
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  descriptionContainer: {
    marginVertical: 50,
    // Adicione estilo conforme necessário
  },
  tagContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  tagItem: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 5,
  },
  tagText: {
    fontSize: 16,
    textAlign: 'center',
  },
  lineBottom: {
    position: 'absolute',
    bottom: 0,
    width: '120%',
    height: 160,
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
    marginBottom: 15,
  },
  result: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    marginHorizontal: 10,
  },
  actions: {
    position: 'absolute',
    top: '100%',
    right: -50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    width: 80,
    height: 80,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0AA4D',
  },
  buttonPressed: {
    backgroundColor: '#2A234B',
  },
};

export default Order;
