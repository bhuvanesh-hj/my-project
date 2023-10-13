export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.data, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.data.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.data.id
            ? (c.quantity = action.data.quantity)
            : c.quantity
        ),
      };
    default:
      return state;
  }
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_SORT":
      return { ...state, sort: action.data };
    case "FILTER_FAST_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_RATING":
      return { ...state, byRating: action.data };
    case "FILTER_SEARCH":
      return { ...state, bySearchQuery: action.data };
    case "CLEAR_FILTER":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        bySearchQuery: "",
      };

    default:
      return state;
  }
};
