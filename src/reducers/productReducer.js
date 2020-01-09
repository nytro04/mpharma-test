import { FETCH_PRODUCTS } from "../actions/types";

const INITIAL_STATE = {
  products: []
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
