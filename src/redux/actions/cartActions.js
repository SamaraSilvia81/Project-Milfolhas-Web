// actions/cartActions.js
export const addToCart = (item) => {
    return {
      type: 'ADD_TO_CART',
      payload: item,
    };
  };  

export const removeFromCart = (itemId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: itemId,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};

// confirmActions.js
export const setCartTotal = (total) => ({
  type: 'SET_CART_TOTAL',
  payload: total,
});
