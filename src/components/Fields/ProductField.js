import React, { useEffect, useState } from "react";
import "./Field.css";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/actions/productsActions";

import * as Yup from "yup";
import { fetchCategories } from "../../store/actions/categoriesActions";

export default function ProductField() {
  const categories = useSelector(state => state.categories.list)
  const dispatch = useDispatch();
  useEffect(()=> dispatch(fetchCategories()), [dispatch])

  const formik = useFormik({
    initialValues: { 
      name: "",
      category: categories[0] ? categories[0].name : null,
      quantity: 0,
      price: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().max(30, "Max length is 30!").min(1, "Min length is 1!").required("Required!"),
      category: Yup.string().max(30, "Max lenght is 30!").required("Required!"),
      quantity: Yup.number().min(1, "Cannot be 0!").required("Required"),
      price: Yup.number().min(1, "Cannot be 0!").required("Required"),
    }),
    validateOnChange: false,
    enableReinitialize: true,
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
        {formik.errors && <p>{formik.errors.name}</p>}
      </td>
      <td>
      <select name="category" value={formik.values.category} onChange={formik.handleChange} style={{width: '100%'}}>
          {categories ? (
            categories.map((el) => {
              return(
                <option>{el.name}</option>
              )
            })
          ) : (
            <option>Loading...</option>
          )
          }
        </select>
        {formik.errors && <p>{formik.errors.category}</p>}
      </td>
      <td>
      <input
          type="number"
          placeholder="quantity"
          name="quantity"
          onChange={formik.handleChange}
          value={formik.values.quantity}
        ></input>
         {formik.errors && <p>{formik.errors.quantity}</p>}
      </td>
      <td>
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        ></input>
        {formik.errors && <p>{formik.errors.price}</p>}
      </td>
      <td>
        <button type="button" onClick={formik.handleSubmit}>
          +
        </button>
      </td>
    </tr>
  );
}