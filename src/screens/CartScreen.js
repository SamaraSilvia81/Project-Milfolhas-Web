import React, {useState} from "react";
import { Button, Typography, Box, AppBar, Toolbar, IconButton, Grid, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import axios from 'axios'; // Importe o Axios

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../redux/actions/cartActions";
import { setClientName } from '../redux/actions/confirmActions'; // Importe a ação correta
import { clearCart, setCartTotal } from '../redux/actions/cartActions'; // Importe a ação correta

import cartTotal from "../util/cartTotal";

import Cart from "../components/Cart";

const CartScreen = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const [clientName, setClientNameLocal] = useState('');

  const total = cartTotal(cartItems);

  // Finalizar Comprar
  
  // const handleCardPress = async () => {
  //   try {
  //     if (total === 0) {
  //       navigate("/Home");
  //     } else {
  //       const response = await fetch('http://localhost:3001/imprimir', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           clientName,
  //           cartItems,
  //           total,
  //         }),
  //       });
  
  //       if (!response.ok) {
  //         throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
  //       }
  
  //       const data = await response.json();
  //       console.log('Resposta do servidor:', data);
  
  //       dispatch(clearCart());
  //       dispatch(setClientName(clientName));
  //       dispatch(setCartTotal(total));
  
  //       navigate("/Check");
  //     }
  //   } catch (error) {
  //     console.error('Erro na solicitação:', error);
  //   }
  // };  
  
  // const handleCardPress = async () => {

  //   console.log('Antes da solicitação HTTP');
  
  //   try {
  //     console.log('Enviando solicitação HTTP para:', 'http://localhost:3001/imprimir');
  //     console.log('Dados a serem enviados:', {
  //       clientName,
  //       cartItems,
  //       total,
  //     });
  
  //     const response = await axios.post(
  //       'http://localhost:3001/imprimir',
  //       {
  //         clientName,
  //         cartItems,
  //         total,
  //       },
  //       {
  //         maxContentLength: Infinity,
  //         maxBodyLength: Infinity,
  //       }
  //     );
  
  //     // Verifique a resposta do servidor
  //     console.log('Resposta do servidor:', response.data);
  
  //     dispatch(clearCart());
  //     dispatch(setClientName(clientName));
  //     dispatch(setCartTotal(total));
  
  //     navigate('/Check');
  //   } catch (error) {
  //     console.error('Erro na solicitação:', error.message);
  //   }
  // };

  const handleCardPress = async () => {
    console.log('Antes da solicitação HTTP');
  
    try {
      console.log('Enviando solicitação HTTP para:', 'http://localhost:3001/imprimir');
      console.log('Dados a serem enviados:', {
        clientName,
        cartItems,
        total,
      });
  
      const response = await axios.post(
        'http://localhost:3001/imprimir',
        {
          clientName,
          cartItems,
          total,
        },
        {
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        }
      );
  
      // Verifique a resposta do servidor
      console.log('Resposta do servidor:', response.data);
  
      // A partir daqui, você pode manipular os dados da resposta conforme necessário
      const { success, jobID, error } = response.data;
  
      if (success) {
        // Os dados foram impressos com sucesso
        dispatch(clearCart());
        dispatch(setClientName(clientName));
        dispatch(setCartTotal(total));
        navigate('/Check');
      } else {
        // Houve um erro ao imprimir
        console.error('Erro ao imprimir:', error);
        // Adicione lógica para lidar com o erro no frontend, se necessário
      }
    } catch (error) {
      console.error('Erro na solicitação:', error.message);
      // Adicione lógica para lidar com erros de solicitação, se necessário
    }
  };
  
  

  // Cancelar pedido
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
  };

  // Acompanhamentos
  const handleMoreOrderPress = () => {
    navigate('/Home');
  };

  const handleInputChange = (e) => {
    setClientNameLocal(e.target.value); // Atualize o valor do campo de entrada usando o useState local
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      
      <AppBar position="static" sx={styles.header}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleGoBack} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carrinho de Compras
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'row', // Mude para 'row' para exibir os cartões na horizontal
          flexWrap: 'wrap', // Permite que os cartões quebrem para a próxima linha, se necessário
        }}
      >
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <Cart key={item.id} cart={item} onPress={handleRemoveFromCart} />
            ))}
          </>
        ) : (
          <Box
            sx={{
              width: '30%',
              textAlign: 'center',
              padding: '12px 8px',
              margin: '12% 35%',
              backgroundColor: '#f0f0f0',
              borderRadius: '5px',
              border: '1px solid #f0f0f0',
            }}
          >
            <Typography variant="body1" sx={{ color: '#000' }}>
              Seu carrinho está vazio !!
            </Typography>
          </Box>
        )}
      </Box>

      <TextField
        fullWidth
        id="username"
        label="Insira seu nome aqui"
        variant="outlined"
        value={clientName}
        onChange={handleInputChange}
        style={{ width: '30%', margin:'0 35%'}}
      />

      <Box
        sx={{
          backgroundColor: '#2a2419',
          textAlign: 'center',
          padding: '20px',
          marginTop: '20px',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="body1" sx={{ color: '#fff', marginTop: '10px' }}>
              Deseja adicionar algo mais?
            </Typography>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                width: '40%',
                height: '40px',
                backgroundColor: '#C0AA4D',
                '&:hover': {
                  backgroundColor: '#A8953A',
                },
              }}
              onClick={handleMoreOrderPress}
            >
              Acompanhamentos
            </Button>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Typography variant="h6" sx={{ color: '#fff', marginTop: '10px', marginRight: '10%' }}>
              Valor Total: R$ {total.toFixed(2)}
            </Typography>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                width: '40%',
                height: '40px',
                backgroundColor: '#9c8559',
                '&:hover': {
                  backgroundColor: '#4e432d',
                },
              }}
              onClick={handleCardPress}
            >
              Finalizar Compra
            </Button>
          </Grid>
        </Grid>
      </Box>
     
    </Box>
  );
};

const styles = {
  header: {
    width: "100%",
    backgroundColor: "#2a2419",
  },
};

export default CartScreen;