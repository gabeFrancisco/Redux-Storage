import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../store/actions/customersActions";

import Modal from '../Modal/Modal';

import "./Sale.css";

export default function NewSale() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.list);

  const [clientModal, setClientModal] = useState(false)

  useEffect(() => dispatch(fetchCustomers()), [dispatch]);

  return (
    <div className="Sale List">
      <div className="Form">
        <h3>Customer: Jesus Christ</h3>
        <button type="button" onClick={() => setClientModal(true)}>Select customer</button>
        <Modal 
          visibility={clientModal} 
          handleVisibility={setClientModal} 
          title="Add customer..."
          vwidth={50}
          vheight={50}
        >
          <div className="Form">
            <input type="text"/>
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















