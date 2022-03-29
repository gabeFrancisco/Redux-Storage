import axios from "axios";
const BASE_URL = "http://localhost:7000/categories";

export function fetchCategories() {
  return async (dispatch) => {
    axios.get(BASE_URL).then((res) => {
      dispatch({
        type: "CATEGORIES_FETCHED",
        list: res.data,
      });
    });
  };
}

export function addCategory(category){
  return async (dispatch) => {
    await axios 
      .post(BASE_URL, category)
      .then((res) => {  
        if(res.status === 200){
          dispatch(fetchCategories())
        }
      })
      .then(
        dispatch({
          type: "CATEGORY_ADDED"
        })
      )
  }
}
