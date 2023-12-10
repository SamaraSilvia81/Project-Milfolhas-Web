import React, {useState} from "react";
import { Button, Typography, Box, AppBar, Toolbar, IconButton, Grid, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../redux/actions/cartActions";
import { setClientName } from '../redux/actions/confirmActions'; // Importe a ação correta
import { clearCart, setCartTotal } from '../redux/actions/cartActions'; // Importe a ação correta

import Cart from "../components/Cart";

const CartScreen = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const [clientName, setClientNameLocal] = useState('');

  // Finalizar Comprar
  const handleCardPress = () => {
    const total = calculateTotal();
    printReceipt();
    dispatch(clearCart());
    dispatch(setClientName(clientName));
    dispatch(setCartTotal(total)); // Dispatch the new action to update cartTotal in Redux store
    navigate("/Check");
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleMoreOrderPress = () => {
    navigate('/Home');
  };

  const handleInputChange = (e) => {
    setClientNameLocal(e.target.value); // Atualize o valor do campo de entrada usando o useState local
  };

   // Função para calcular o valor total do carrinho
   const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemValue = parseFloat(item.value) || 0;
      const itemQuantity = parseInt(item.quantity) || 0;
      return total + itemValue * itemQuantity;
    }, 0);
  };

  const printReceipt = () => {
    const printWindow = window.open('', '_blank');
    
    if (printWindow) {
      printWindow.document.write('<html><head><title>Comanda - Mil Folhas</title>');
      printWindow.document.write('<style>');
      printWindow.document.write('body { font-family: Arial, sans-serif; }');
      printWindow.document.write('h1 { color: #2a2419; }');
      printWindow.document.write('ul { list-style-type: none; padding: 0; }');
      printWindow.document.write('li { margin-bottom: 8px; }');
      printWindow.document.write('p strong { font-weight: bold; color: #2a2419; }');
      printWindow.document.write('.total { color: #2a2419; font-weight: bold; }');
      printWindow.document.write('</style></head><body>');
      
      // Adicione a logo e o nome da empresa
      printWindow.document.write('<img src="../../public/logo.png" alt="Mil Folhas" style="max-width: 100px;"/>');
      printWindow.document.write('<h1>Mil Folhas</h1>');
      
      // Adicione os detalhes do cliente e pedidos ao corpo do HTML
      printWindow.document.write('<p><strong>Nome do Cliente:</strong> ' + clientName + '</p>');
      printWindow.document.write('<h4>Pedidos:</h4>');
      printWindow.document.write('<ul>');
  
      cartItems.forEach(item => {
        printWindow.document.write('<li>' + item.name + ':' + ' R$ ' + item.value + ' -- ' + item.quantity + '(unid)' + ' = ' + ' R$ ' + (parseInt(item.value) * item.quantity).toFixed(2) + '</li>');
      });
      
      printWindow.document.write('</ul>');
      printWindow.document.write('<h2 class="total"><strong>Total:</strong> R$ ' + calculateTotal().toFixed(2) + '</h2>');
      printWindow.document.write('</body></html>');
      
      printWindow.document.close(); // Fecha o documento atual
      printWindow.print(); // Inicia o processo de impressão
    } else {
      alert('Não foi possível abrir a janela de impressão. Verifique se as pop-ups estão bloqueadas.');
    }
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
              Seu carrinho está vazio.
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
            <Typography variant="h6" sx={{ color: '#fff', marginTop: '10px', marginRight: '11%' }}>
              Valor Total: R$ {calculateTotal().toFixed(2)}
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