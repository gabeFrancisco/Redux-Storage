import axios from "axios";
const BASE_URL = "http://localhost:7000/products";

export function fetchProducts() {
  return (dispatch) => {
    axios.get(BASE_URL).then((res) => {
      return dispatch({
        type: "PRODUCTS_FETCHED",
        payload: res.data,
      });
    })
  };
}

export function addProduct(product){
  axios.post(BASE_URL, product)
  return{
    type: 'PRODUCT_ADDED',
    payload: product
  }
}
