import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import CustomersPage from "./pages/CustomersPage";
import ShowCustomerPage from "./pages/ShowCustomerPage";
import NewCustomerPage from "./pages/NewCustomerPage";
import Notification from "./components/Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import NotificationsPage from "./pages/NotificationsPage";
import { useEffect } from "react";
import { fetchNotifications } from "./store/actions/notificationsActions";
import SalesPage from "./pages/SalesPage";

export default function App() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);
  useEffect(() => dispatch(fetchNotifications()), [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route
              path="/customers/showCustomer"
              element={<ShowCustomerPage />}
            />
            <Route
              path="/customers/newCustomer"
              element={<NewCustomerPage />}
            />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/sales" element={<SalesPage/>}/>
          </Routes>
        </div>

        {notifications.list &&
          notifications.list.map((el) => (
            <Notification
              title={el.title}
              message={el.message}
              color={el.color}
            />
          ))}
      </div>
    </Router>
  );
}
