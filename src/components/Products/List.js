import React from 'react'

import './List.css'

function List(){
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
          <tr>
            <th>7</th>
            <td>Bible</td>
            <td>Books</td>
            <td>700</td>
            <td>$12,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default List