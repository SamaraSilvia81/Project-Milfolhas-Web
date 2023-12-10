// reducers/cartReducer.js
const initialState = {
  cartItems: [],
  cartTotal: [],
};

// SET_CART_TOTAL

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    case 'SET_CART_TOTAL':
        return {
          ...state,
          cartTotal: action.payload,
        };
    default:
      return state;
  }
};

export { cartReducer }; // Remova o 'default'