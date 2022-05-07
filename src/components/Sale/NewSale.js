import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../store/actions/customersActions";
import { addCustomerToSale, addNewSale } from "../../store/actions/newSaleActions";

import Modal from "../Modal/Modal";
import ProductOrderField from "../Fields/ProductOrderField";

import "./Sale.css";
import { useNavigate } from "react-router-dom";

export default function NewSale() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.list);

  const navigate = useNavigate();

  const [clientModal, setClientModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState({});

  const newSale = useSelector((state) => state.newSale);
  const totalValue = newSale.productOrders.reduce(
    (a, b) => a + b.product.price * b.quantity,
    0
  );

  useEffect(() => dispatch(fetchCustomers()), [dispatch]);

  const createSale = () => {
    let sale = newSale;
    sale.totalValue = totalValue;
    console.log(sale)
    dispatch(addNewSale(sale))
    navigate("/sales")
  }

  return (
    <div className="Sale List">
      <div className="Form">
        <h3>Customer: {newSale.customer ? newSale.customer.name : " "}</h3>
        <button type="button" onClick={() => setClientModal(true)}>
          Select customer
        </button>

        <Modal
          visibility={clientModal}
          handleVisibility={setClientModal}
          title="Add customer..."
          vwidth={40}
          vheight={60}
          zindex={9999999}
        >
          <div className="Form">
            <span className="dmargin">Search customer</span>
            <input
              className="dmargin"
              placeholder="Type a customer to search..."
              type="text"
            />
            <small className="dmargin">
              This text box has a "debounce" algorithm. You type, stop, then
              await for the result
            </small>
          </div>
          <div className="Form Customer-List dmargin">
            {customers.length > 0 ? (
              customers.map((el, key) => {
                return (
                  <div
                    className="Customer-Result"
                    onClick={() => {
                      setSelectedCustomer(el);
                    }}
                    style={{
                      backgroundColor:
                        selectedCustomer.id === el.id ? "#6e86f5" : "inherit",
                      color: selectedCustomer.id === el.id ? "#fff" : "#000",
                    }}
                  >
                    {el.name}
                  </div>
                );
              })
            ) : (
              <h1 id="loading">Loading</h1>
            )}
          </div>
          <div className="Form dmargin">
            <button
              type="button"
              onClick={() => {
                dispatch(addCustomerToSale(selectedCustomer));
                setClientModal(false);
              }}
            >
              Submit!
            </button>
          </div>
        </Modal>
      </div>
      <div className="ProductOrders Form">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {newSale.productOrders.length > 0 ? (
              newSale.productOrders.map((el, key) => {
                return (
                  <tr key={key}>
                    <td>{el.product.name}</td>
                    <td>{el.quantity}</td>
                    <td>{el.total}</td>
                  </tr>
                );
              })
            ) : (
              <h3 class="dmargin">Add some products!</h3>
            )}
          </tbody>
        </table>
        <button
          type="button"
          className="dmargin"
          onClick={() => setProductModal(true)}
        >
          Add product!
        </button>
      </div>
      <Modal
        title="Add products..."
        visibility={productModal}
        handleVisibility={setProductModal}
        vwidth={50}
        vheight={60}
      >
        <div className="Form">
          <table>
            <thead>
              <th>Id</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </thead>
            <tbody>
              {newSale.productOrders.length > 0 ? (
                newSale.productOrders.map((el, index) => {
                  return (
                    <tr key={index}>
                      <th>{el.product.id}</th>
                      <td>{el.product.name}</td>
                      <td>{el.quantity}</td>
                      <td>{el.product.price}</td>
                      <td>{el.total}</td>
                    </tr>
                  );
                })
              ) : (
                <h2 className="Form">Nothing to show yet</h2>
              )}
            </tbody>
          </table>
          <ProductOrderField />
        </div>
      </Modal>
      <div className="Form">
        <h1>Total: ${totalValue}</h1>
      </div>
      <div class="Sale-Button">
        <button
          type="button"
          class="dmargin"
          onClick={() => createSale()}
        >
          Submit Sale!
        </button>
      </div>
    </div>
  );
}
