import React, { useState } from "react";

import "./Field.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCategory } from "../../store/actions/categoriesActions";

function CategoryField() {
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
          readOnly={true}
          value={color}
        ></input>
        <input
          type="color"
          value={color}
          onChange={color => setColor(color.target.value)}
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

export default CategoryField;
