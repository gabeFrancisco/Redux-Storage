import React, { useState } from "react";

import "./Field.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCategory } from "../../store/actions/categoriesActions";
import { addNotification } from "../../store/actions/notificationsActions";

export default function CategoryField() {
  const [color, setColor] = useState("#ffffff");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(30, "Max lenght is 30").required("Required"),
    }),
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      const category = {
        name: values.name,
        color: color,
      };

      resetForm();
      setColor("#ffffff")
      dispatch(addCategory(category))
      dispatch(addNotification({
        title: "Category added!",
        message: `The category ${category.name} was added to the system!`,
        color: "Success" 
      }))
    },
  });

  return (
    <tr>
      <th></th>
      <td>
        <input
          type="text"
          palceholder="Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></input>
        {formik.errors.name && <p>{formik.errors.name}</p>}
      </td>
      <td>
        <input
          type="text"
          palceholder="Color"
          name="color"
          value={color}
          onChange={e => setColor(e.target.value)}
          max
        ></input>
        <input
          type="color"
          value={color}
          onChange={e=> setColor(e.target.value)}
        ></input>
      </td>
      <td>
        <button type="button" onClick={formik.handleSubmit}>
          +
        </button>
      </td>
    </tr>
  );
}


