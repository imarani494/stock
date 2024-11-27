const initialState = {
    stocks: [],
  };
  
  const stockReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_STOCKS":
        return {
          ...state,
          stocks: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default stockReducer;
  