const initialState = {
    lists: [],
    message: '',
    messageType: '',
  };
  
  const listsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LISTS':
        return {
          ...state,
          lists: action.payload,
        };
      case 'SHOW_MESSAGE':
        return {
          ...state,
          message: action.payload,
          messageType: action.payload.type,
        };
      case 'CLEAR_MESSAGE':
        return {
          ...state,
          message: '',
          messageType: '',
        };
      default:
        return state;
    }
  };
  
export default listsReducer;