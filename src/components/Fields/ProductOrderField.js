import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { addProductOrder } from '../../store/actions/newSaleActions';

import { fetchProducts } from "../../store/actions/productsActions";

import "./ProductOrderField.css";

export default function ProductOrderField() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  const setProductOrder = () => {
    if(selectedProduct === ""){
      // eslint-disable-next-line no-throw-literal
      throw "Invalid Object!" 
    }
    dispatch(addProductOrder({
      quantity: parseInt(quantity),
      total: parseFloat(quantity * selectedProduct.price),
      product: selectedProduct
    }))
  }

  return (
    <div className="ProductOrderField">
      <div className="Product-Selection-Area">
        <span>Search a product:</span>
        <input
          type="text"
          value={selectedProduct.name}
          onChange={(e) => setSelectedProduct(e.target.value)}
        />
        <ul>
          {products.length > 0 ? (
            products.map((el, index) => {
              return <li onClick={() => setSelectedProduct(el)}>{el.name}</li>;
            })
          ) : (
            <h2> You don't have any products yet</h2>
          )}
        </ul>
      </div>
      <div>
        <div>
          {selectedProduct ? (
            <h4 className="dmargin">Quantity: {selectedProduct.quantity}</h4>
          ) : (
            ""
          )}
        </div>
        <div>
          {selectedProduct ? (
            <h4 className="dmargin">
              Price: ${parseFloat(selectedProduct.price).toFixed(2)}
            </h4>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="Quantity-Area">
        <span>Select quantity:</span>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          max={selectedProduct.quantity}
          min={1}
        />
        <button className="dmargin" onClick={() => setProductOrder()}>
          Add product
        </button>
      </div>
    </div>
  );
}
