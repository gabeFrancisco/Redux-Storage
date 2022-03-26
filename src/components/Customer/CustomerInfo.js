import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readCustomer } from "../../store/actions/customersActions";
import { Link } from 'react-router-dom'

import "./Customer.css";

export default function CustomerInfo(props) {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customers.customer);

  useEffect(() => {
    dispatch(readCustomer(props.customerId));
  }, [dispatch, props]);

  return (
    <div className="Customer">
        <Link to="/customers"> &lt;-BACK </Link>
        <p>
          <b>Name: </b>
          {customer.name}
        </p>
        <p>
          <b>Phone: </b>
          {customer.phone}
        </p>
        <p>
          <b>Email: </b>
          {customer.email}
        </p>
        <p>
          <b>Address: </b>
          {customer.address}
        </p>
        <p>
          <b>City: </b>
          {customer.city}
        </p>
        <p>
          <b>Country: </b>
          {customer.country}
        </p>
        <p>
          <b>Postal Code: </b>
          {customer.postalCode}
        </p>
      <div className="Button-area">
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>
  );
}
