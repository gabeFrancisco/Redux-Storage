import axios from "axios";
import { fetchSales } from "./salesActions";

const BASE_URL = "https://localhost:5001/api/sales";

export function addCustomerToSale(customer) {
  return {
    type: "CUSTOMER_ADDED",
    customer: customer,
  };
}

export function addProductOrder(productOrder) {
  return {
    type: "PRODUCT_ORDER_ADDED",
    productOrder: productOrder,
  };
}

export function addNewSale(newSale) {
  return async (dispatch) => {
    await axios
      .post(BASE_URL, newSale)
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetchSales());
        }
      })
      .then(
        dispatch({
          type: "SALE_ADDED",
        })
      );
  };
}
