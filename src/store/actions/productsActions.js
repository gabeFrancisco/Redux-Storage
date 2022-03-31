import axios from "axios";
const BASE_URL = "http://localhost:7000/products";

export function fetchProducts() {
  return async (dispatch) => {
    axios.get(BASE_URL).then((res) => {
      dispatch({
        type: "PRODUCTS_FETCHED",
        list: res.data,
      });
    });
  };
}

export function addProduct(product) {
  return async (dispatch) => {
    await axios
      .post(BASE_URL, product)
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetchProducts());
        }
      })
      .then(
        dispatch({
          type: "PRODUCT_ADDED",
        })
      );
  };
}

export function updateProduct(product){
  return async dispatch => {
    return axios
      .put(BASE_URL, product)
      .then(res => {
        if(res.status === 200){
          dispatch(fetchProducts())
        }
      })
      .then(
        dispatch({
          type: "PRODUCT_UPDATED"
        })
      )
  }
}

export function removeProduct(productId){
  return async dispatch => {
    await axios 
      .delete(`${BASE_URL}/${productId}`)
      .then(res => {
        if(res.status === 200){
          dispatch(fetchProducts())
        }
      })
      .then(
        dispatch({
          type: "PRODUCT_REMOVED"
        })
      )
  }
}
