const INITIAL_STATE = {
  list: [],
  notification: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NOTIFICATIONS_FETCHED":
      return { ...state, list: action.list };
    case "NOTIFICATION_ADDED":
      return { ...state };
    default:
      return state;
  }
}
