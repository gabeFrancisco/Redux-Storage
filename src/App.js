import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
