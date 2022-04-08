import axios from "axios";
const BASE_URL = "https://localhost:5001/api/notifications";

export function fetchNotifications() {
  return async (dispatch) => {
    axios.get(BASE_URL).then((res) =>
      dispatch({
        type: "NOTIFICATIONS_FETCHED",
        list: res.data,
      })
    );
  };
}

export function addNotification(message) {
  return async (dispatch) => {
    await axios
      .post(BASE_URL, message)
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetchNotifications());
        }
      })
      .then(
        dispatch({
          type: "NOTIFICATION_ADDED",
          notification: message
        })
      );
  };
}
