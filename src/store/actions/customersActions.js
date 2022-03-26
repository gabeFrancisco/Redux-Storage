import axios from "axios";
const BASE_URL = "http://localhost:7000/customers";

export function fetchCustomers() {
  return async (dispatch) => {
    axios.get(BASE_URL).then((res) => {
      dispatch({
        type: "CUSTOMERS_FETCHED",
        list: res.data,
      });
    });
  };
}

export function addCustomer(customer) {
  return async (dispatch) => {
    await axios
      .post(BASE_URL, customer)
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetchCustomers());
        }
      })
      .then(
        dispatch({
          type: "CUSTOMER_ADDED",
        })
      );
  };
}

export function readCustomer(id) {
  return async (dispatch) => {
    await axios.get(`${BASE_URL}/${id}`).then((res) => {
      dispatch({
        type: "CUSTOMER_READED",
        customer: res.data,
      });
    });
  };
}
