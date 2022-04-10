import axios from "axios";

const BASE_URL = "https://localhost:5001/api/sales";

export function fetchSales() {
  return (dispatch) => {
    axios.get(BASE_URL).then((res) => {
      dispatch({
        type: "SALES_FETCHED",
        list: res.data,
      });
    });
  };
}

export function addSale(sale) {
  return async dispatch => {
    await axios
      .post(BASE_URL, sale)
      .then(res => {
        if(res === 200){
          dispatch(fetchSales())
        }
      })
      .then(
        dispatch({
          type: "SALES_ADDED"
        })
      )
  }
}  
