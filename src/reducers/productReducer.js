import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from "../actions/types";

const INITIAL_STATE = {
  products: [
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
  productState = productState ? productState : state.products;

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
      // const { id } = payload;
      console.log(payload.id);

      // const updateProduct = [
      //   ...JSON.parse(localStorage.getItem("mPharma")),
      //   payload
      // ];

      // console.log(updateProduct);

      // localStorage.setItem("mPharma", JSON.stringify(updateProduct));

      localStorage.setItem(
        "mPharma",
        JSON.stringify([
          ...productState.filter(productItem => productItem.id !== payload.id)
        ])
      );

      JSON.parse(localStorage.getItem("mPharma"));

      localStorage.setItem(
        "mPharma",
        JSON.stringify([...productState, payload])
      );

      return {
        ...state,
        products: JSON.parse(localStorage.getItem("mPharma"))
        // products: localStorage.setItem("mPharma", JSON.stringify(updateProduct))
      };

    case DELETE_PRODUCT:
      console.log(payload);
      console.log(productState, "%%%%%  product state");

      let newArray = [];
      newArray = productState.filter(productItem => productItem.id !== payload);

      console.log(newArray, "******* new array");

      console.log(
        JSON.parse(localStorage.getItem("mPharma")),
        "local storage before delete"
      );

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
      localStorage.setItem("mPharma", JSON.stringify(state.products));

      // return state;
      return {
        ...state,
        products: JSON.parse(localStorage.getItem("mPharma"))
      };

    default:
      return state;
  }
};
