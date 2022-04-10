import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "../../store/actions/salesActions";

export default function SalesList() {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales.list);

  useEffect(() => dispatch(fetchSales()), [dispatch]);

  return (
    <div className="List animateContent">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer</th>
            <th>Products</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.length > 0 ? (
            sales
              .map((el, key) => {
                return (
                  <tr key={key}>
                    <td>{el.createdAt}</td>
                    <td>{el.customer.name}</td>
                    <td>
                      <table>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Total Value</th>
                        {el.productOrders.map((el) => {
                          return (
                            <tr>
                              <td>{el.product.name}</td>
                              <td>{el.quantity}</td>
                              <td>{el.quantity * el.product.price}</td>
                            </tr>
                          );
                        })}
                      </table>
                    </td>
                    <td><b>${parseFloat(el.totalValue).toFixed(2)}</b></td>
                  </tr>
                );
              })
              .reverse()
          ) : (
            <h1 id="loading">Nothing to show yet...</h1>
          )}
        </tbody>
      </table>
    </div>
  );
}
