import React, {useState, useEffect} from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import CustomAlert from '../util/CustomAlert'; // Substitua o caminho correto para o componente

const Order = ({ order }) => {

  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const navigate = useNavigate();
  
  // Adquira a função dispatch do Redux
  const dispatch = useDispatch();

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
    
  const handleCardPress = () => {

    if (counter === 0) {
      setIsAlertOpen(true);
      return;
    }
  
    const orderData = {
      id: order.id,
      name: order.name,
      image: order.image,
      value: order.value,
      quantity: counter,
      total: total,
    };
   
    setIsButtonPressed(true);
    setIsAlertOpen(false);

    // Utilize a função dispatch para despachar a ação addToCart
    dispatch(addToCart(orderData));
   
    navigate(`/Confirm/${encodeURIComponent(JSON.stringify(orderData))}`);
  };

  console.log("My Order: ", order)
  const price = parseFloat(order.value);
  const total = price * counter;

  return (
    <Card style={{ width: '400px', marginTop:"30px"}}>

      {isAlertOpen && (
        <CustomAlert onClose={() => setIsAlertOpen(false)}>
          É preciso inserir uma quantidade !!
        </CustomAlert>
      )}

      <CardMedia component="img" alt={order.name} height="200" image={order.image} />
      <CardContent>

        <Typography style={{ fontSize: 30, marginBottom: '2px', color: '#333' }}>
          {order.name}
        </Typography>
        <Typography variant="h5" color="textSecondary">
          R$ {order.value}
        </Typography>

        <div style={styles.tagItem}>
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

        <Typography sx={styles.tagText} variant="h6">
          Valor Total
        </Typography>
        <Typography sx={styles.tagPrice} variant="h5">
          R$ {total}
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Button
            variant="contained"
            sx={[styles.button, isButtonPressed && styles.buttonPressed]}
            onClick={handleCardPress}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ShoppingCartIcon style={{ fontSize: 25, color: 'white' }} />
                <div style={{ width: '4px' }}></div> {/* Espaço entre o ícone e o texto */}
                <div style={{ width: '1px', height: '20px', backgroundColor: 'white' }}></div>
              </div>
              <Typography variant="h6" sx={{ fontSize: 15, fontWeight: 'bold' }}>
                Adicionar ao Carrinho
              </Typography>
            </div>
          </Button>
        </div>
        
      </CardContent>
    </Card>
  );
};

const styles = {
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  tagItem: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'#f2f2f2',
    padding: '15px 0',
    marginTop: '25px',
  },
  tagText: {
    marginTop: 3,
    textAlign: 'center' 
  },
  tagPrice:{
    marginTop: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  push: {
    minWidth: 35,
    minHeight: 35,
    borderRadius: '50%', // Use '50%' for a circular shape
    padding: 0, // Remova o preenchimento padrão
    justifyContent: 'center',
    backgroundColor: '#C0AA4D', 
    transition: 'background-color 0.3s ease', // Adiciona uma transição suave
    '&:hover': {
      backgroundColor: '#A8953A', // Cor desejada no hover
    },
  },
  minus: {
    minWidth: 35,
    minHeight: 35,
    borderRadius: '50%', // Use '50%' for a circular shape
    padding: 0, // Remova o preenchimento padrão
    justifyContent: 'center',
    backgroundColor: '#C0AA4D',
    transition: 'background-color 0.3s ease', // Adiciona uma transição suave
    '&:hover': {
      backgroundColor: '#A8953A', // Cor desejada no hover
    },
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 15,
  },
  result: {
    textAlign: 'center',
    margin: '0 5%',
  },
  actions: {
    top: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    width: 60,
    height: 60,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  button: {
    width: '70%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4e432d',
    transition: 'background-color 0.3s ease', // Adiciona uma transição suave
    '&:hover': {
      backgroundColor: '#9c8559', // Cor desejada no hover
    },
  },
};

export default Order;
