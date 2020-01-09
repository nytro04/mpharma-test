import axios from "axios";
import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => async dispatch => {
  const url = "http://www.mocky.io/v2/5c3e15e63500006e003e9795";

  const res = await axios.get(url);

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};
