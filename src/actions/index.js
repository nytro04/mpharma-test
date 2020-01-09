// import axios from "axios";
import { FETCH_PRODUCTS, CREATE_PRODUCT } from "./types";

// const url = "http://www.mocky.io/v2/5c3e15e63500006e003e9795";

export const fetchProducts = () => async dispatch => {
  // const res = await axios.get(url);

  dispatch({ type: FETCH_PRODUCTS });
  // dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const createProduct = formValues => async dispatch => {
  // const res = await axios.post(url, formValues);

  dispatch({ type: CREATE_PRODUCT, payload: formValues });
};
