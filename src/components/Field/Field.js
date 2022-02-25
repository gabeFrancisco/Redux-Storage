import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/productsActions";

function Field(props) {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      quantity: 0,
      price: 0,
    },
    onSubmit: (values) => {
      const product = {
        name: values.name,
        category: values.category,
        quantity: values.quantity,
        price: values.price,
      };

      dispatch(addProduct(product))
    },
  });
  return (
    <tr>
      <th></th>
      <td>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="category"
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category}
        ></input>
      </td>
      <td>
        <input
          type="number"
          placeholder="quantity"
          name="quantity"
          onChange={formik.handleChange}
          value={formik.values.quantity}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        ></input>
      </td>
      <td>
        <button type="button" onClick={formik.handleSubmit}>+</button>
      </td>
    </tr>
  );
}

export default Field;
