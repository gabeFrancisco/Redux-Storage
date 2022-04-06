import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../store/actions/categoriesActions";
import { fetchProducts } from "../../store/actions/productsActions";
import ProductField from "../Fields/ProductField";
import ProductRow from "../Rows/ProductRow";

import "./List.css";

export default function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

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
          {products.length > 0 ? (
            products.map((el, key) => {
              return (
                <ProductRow
                  key={key}
                  id={el.id}
                  name={el.name}
                  category={el.category.name}
                  categoryColor={el.category.color}
                  quantity={el.quantity}
                  price={el.price}
                />
              );
            })
          ) : (
            <h1 id="loading">Loading...</h1>
          )}
          <ProductField />
        </tbody>
      </table>
    </div>
  );
}
