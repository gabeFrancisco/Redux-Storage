import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/actions/productsActions";

export default function ProductRow(props) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  
  const handleRemove = () => {
    dispatch(removeProduct(props.id))
  }

  const formik = useFormik({
    initialValues: {
      name: props.name,
      category: props.category,
      quantity: props.quantity,
      price: props.price,
    },
    validateOnChange: false,
    enableReinitialize: true,
  });

  return (
    <>
      {edit ? (
        <tr key={props.key}>
          <th>{props.id}</th>
          <td>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </td>
          <td className="category">
            <input
              type="text"
              name="category"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
          </td>
          <td>
            <input
              type="text"
              name="quantity"
              onChange={formik.handleChange}
              value={formik.values.quantity}
            />
          </td>
          <td>
            <input
              type="text"
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </td>
          <td>
            <button type="button" onClick={() => setEdit(true)}>
              S
            </button>
          </td>
          <td>
            <button type="button">C</button>
          </td>
        </tr>
      ) : (
        <tr key={props.key}>
          <th>{props.id}</th>
          <td>{props.name}</td>
          <td className="category">
            {props.category}
            <span
              id="category-color"
              style={{
                backgroundColor: props.categoryColor,
              }}
            ></span>
          </td>
          <td>{props.quantity}</td>
          <td>${parseFloat(props.price).toFixed(2)}</td>
          <td>
            <button type="button" onClick={() => setEdit(true)}>
              E
            </button>
          </td>
          <td>
            <button type="button" onClick={() => handleRemove()}>X</button>
          </td>
        </tr>
      )}
    </>
  );
}
