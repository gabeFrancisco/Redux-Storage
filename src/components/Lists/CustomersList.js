import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCustomers } from '../../store/actions/customersActions';

import './List.css'

export default function CustomersList(){
  const dispatch = useDispatch()
  const customers = useSelector(state => state.customers.list)

  useEffect(() => dispatch(fetchCustomers()), [dispatch])

  return(
    <div className='List'>
       <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {customers ? (
              customers.map((el, key) => {
                return (
                  <tr key={key}>
                    <th>{el.id}</th>
                    <td><Link to={{pathname:'showCustomer', search: `?customerId=${el.id}`}}>{el.name}</Link></td>
                    <td>{el.phone}</td>
                    <td>{el.city}</td>
                    <td>{el.country}</td>
                  </tr>
                );
              })
            ) : (
              <h1 id="loading">Loading...</h1>
            )}
          </tbody>
        </table>
    </div>
  )
}