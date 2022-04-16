import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../store/actions/customersActions";
import { addCustomerToSale } from "../../store/actions/newSaleActions"

import Modal from '../Modal/Modal';

import "./Sale.css";

export default function NewSale() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.list);

  const [clientModal, setClientModal] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState({})

  useEffect(() => dispatch(fetchCustomers()), [dispatch]);

  const newSale = useSelector((state) => state.newSale)

  return (
    <div className="Sale List">
      <div className="Form">
        <h3>Customer: {(newSale.customer) ? newSale.customer.name : " "}</h3>
        <button type="button" onClick={() => setClientModal(true)}>Select customer</button>


        <Modal 
          visibility={clientModal} 
          handleVisibility={setClientModal} 
          title="Add customer..."
          vwidth={40}
          vheight={60}
        >
          <div className="Form">
            <span className="dmargin">Search customer</span>
            <input className="dmargin" placeholder="Type a customer to search..." type="text"/>
            <small className="dmargin">
              This text box has a "debounce" algorithm.
              You type, stop, then await for the result
            </small>
          </div>
          <div className="Form Customer-List dmargin">
            {customers.length > 0 ? (
              customers.map((el, key) => {
                return (
                  <div 
                    className="Customer-Result"
                    onClick={() => {
                      setSelectedCustomer(el)
                    }}
                    style={{
                      backgroundColor: (selectedCustomer.id === el.id) ? "#6e86f5" : "inherit",
                      color: (selectedCustomer.id === el.id) ? "#fff" : "#000"
                    }}
                  >{el.name}</div>
                )
              })
            ) : (<h1 id="loading">Loading</h1>)}
          </div>
          <div className="Form dmargin">
            <button type="button" onClick={() => {
              dispatch(addCustomerToSale(selectedCustomer))
              setClientModal(false)
              console.log(newSale)
            }}>Submit!</button>
          </div>
        </Modal>

      </div>
      <div className="ProductOrders Form">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7</td>
              <td>Bible</td>
              <td>7</td>
              <td>49</td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="dmargin">Add product!</button>
      </div>
      <div className="Form">
        <h1>Total: $49</h1>
      </div>
    </div>
  );
}















