import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../../store/actions/notificationsActions";

import "./List.css";

export default function NotificationsList() {
  const dispatch = useDispatch()
  const notifications = useSelector(state => state.notifications.list)

  useEffect(() => dispatch(fetchNotifications()), [dispatch])

  return (
    <div className="List">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {notifications.length > 0 ? (
            notifications.map((el, key) => {
              return (
                <tr key={key} className={el.color}>
                  <td><b>{el.title}</b></td>
                  <td>{el.message}</td>
                </tr>
              );
            })
          ) : (
            <h1 id="loading">Nothing to show yet...</h1>
          )}
        </tbody>
      </table>
    </div>
  );
}
