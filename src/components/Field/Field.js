import React from "react";
import "./Field.css";

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/productsActions";

import * as Yup from "yup";

function Field() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      quantity: 0,
      price: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().max(30, "Max lenght is 30!").required("Required!"),
      category: Yup.string().max(30, "Max lenght is 30!").required("Required!"),
      quantity: Yup.number().min(1, "None is invalid!").required("Required!"),
      price: Yup.number().min(1, "None is invalid!").required("Required!"),
    }),
    validateOnChange: false,
    onSubmit: (values, {resetForm}) => {
      const product = {
        name: values.name,
        category: values.category,
        quantity: values.quantity,
        price: values.price,
      };

      resetForm();
      dispatch(addProduct(product))
    },
  });
  return (
    <tr>
      <th></th>
      <td>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></input>
        {formik.errors.name && <p>{formik.errors.name}</p>}
      </td>
      <td>
        <input
          type="text"
          placeholder="Category"
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category}
        ></input>
        {formik.errors.category && <p>{formik.errors.category}</p>}
      </td>
      <td>
        <input
          type="number"
          placeholder="Quantity"
          name="quantity"
          onChange={formik.handleChange}
          value={formik.values.quantity}
        ></input>
        {formik.errors.quantity && <p>{formik.errors.quantity}</p>}
      </td>
      <td>
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        ></input>
        {formik.errors.price && <p>{formik.errors.price}</p>}
      </td>
      <td>
        <button type="button" onClick={formik.handleSubmit}>
          +
        </button>
      </td>
    </tr>
  );
}

export default Field;
