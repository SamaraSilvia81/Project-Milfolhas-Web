// Total do Carrinho de Compras

const cartTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const itemValue = parseFloat(item.value) || 0;
      const itemQuantity = parseInt(item.quantity) || 0;
      return total + itemValue * itemQuantity;
    }, 0);
  };
  
export default cartTotal;  