import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import CustomersPage from "./pages/CustomersPage";
import ShowCustomerPage from "./pages/ShowCustomerPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/categories" element={<CategoriesPage/>}/>
            <Route path="/customers" element={<CustomersPage/>} />
            <Route path="/customers/showCustomer" element={<ShowCustomerPage/>}/>
          </Routes> 
        </div>
      </div>
    </Router>
  );
}
