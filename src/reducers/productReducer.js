import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from "../actions/types";

const INITIAL_STATE = {
  products: JSON.parse(localStorage.getItem("mPharma")) || [
    {
      id: 1,
      name: "Exforge 10mg",
      prices: [
        {
          id: 1,
          price: 10.99,
          date: "2019-01-01T17:16:32+00:00"
        },
        {
          id: 2,
          price: 9.2,
          date: "2018-11-01T17:16:32+00:00"
        }
      ]
    },
    {
      id: 2,
      name: "Exforge 20mg",
      prices: [
        {
          id: 3,
          price: 12.0,
          date: "2019-01-01T17:16:32+00:00"
        },
        {
          id: 4,
          price: 13.2,
          date: "2018-11-01T17:16:32+00:00"
        }
      ]
    },
    {
      id: 3,
      name: "Paracetamol 20MG",
      prices: [
        {
          id: 5,
          price: 5.0,
          date: "2017-01-01T17:16:32+00:00"
        },
        {
          id: 6,
          price: 13.2,
          date: "2018-11-01T17:16:32+00:00"
        }
      ]
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  let productState = [];

  productState = JSON.parse(localStorage.getItem("mPharma"));
  productState = productState ? productState : [];

  switch (type) {
    case CREATE_PRODUCT:
      localStorage.setItem(
        "mPharma",
        JSON.stringify([...productState, payload])
      );
      return {
        ...state,
        products: JSON.parse(localStorage.getItem("mPharma"))
      };
    case EDIT_PRODUCT:
      const { id, formValues } = payload;

      let newEditArray = [...productState];

      newEditArray = productState.map(productItem =>
        productItem.id === Number(id) ? formValues : productItem
      );

      localStorage.setItem("mPharma", JSON.stringify(newEditArray));

      return {
        ...state,
        products: JSON.parse(localStorage.getItem("mPharma"))
      };

    case DELETE_PRODUCT:
      let newArray = [];
      newArray = productState.filter(productItem => productItem.id !== payload);

      localStorage.setItem("mPharma", JSON.stringify([newArray]));

      console.log(
        localStorage.setItem("mPharma", JSON.stringify(newArray)),
        "after deleting"
      );

      JSON.parse(localStorage.getItem("mPharma"));
      return {
        ...state,
        products: JSON.parse(localStorage.getItem("mPharma"))
      };

    case FETCH_PRODUCTS:
      // localStorage.setItem("mPharma", JSON.stringify(state.products));

      // if (!JSON.parse(localStorage.getItem("mPharma"))) {
      //   localStorage.setItem("mPharma", JSON.stringify(state.products));
      // }

      return {
        ...state,
        products: JSON.parse(localStorage.getItem("mPharma"))
      };

    default:
      return state;
  }
};
