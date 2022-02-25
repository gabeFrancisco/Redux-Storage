import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../store/actions/productsActions'
import Field from '../Field/Field'

import './List.css'

function List(){
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchProducts()), [dispatch])

  const products = useSelector(state => state.products.list)

  return(
    <div className='List'>
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
          {products.map(el => {return(
            <tr>
              <th>{el.id}</th>
              <td>{el.name}</td>
              <td>{el.category}</td>
              <td>{el.quantity}</td>
              <td>{el.price}</td>
            </tr>
          )})}
          <Field/>
        </tbody>
      </table>
    </div>
  )
}

export default List