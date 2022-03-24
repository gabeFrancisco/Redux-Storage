import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions/productsActions";
import ProductField from "../Fields/ProductField";

import "./List.css";

function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);

  useEffect(() => dispatch(fetchProducts()), [dispatch]);
 
  return (
    <div className="List">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products ? products.map((el, key) => {
            return (
              <tr key={key}>
                <th>{el.id}</th>
                <td>{el.name}</td>
                <td>{el.category}</td>
                <td>{el.quantity}</td>
                <td>${el.price}</td>
              </tr>
            );
          }): (
            <h1 id="loading">Loading...</h1>
          )}
          <ProductField/>
        </tbody>
      </table>
    </div>
  );
}

export default ProductsList;
