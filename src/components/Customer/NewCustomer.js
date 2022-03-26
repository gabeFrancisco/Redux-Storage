import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import "./Customer.css";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../store/actions/customersActions";
import { useNavigate } from "react-router-dom";

export default function NewCustomer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(1, "Min length is 1!").required("Required!"),
      phone: Yup.string()
        .max(12, "Max numbers are 12!")
        .min(1, "Min length is 1!")
        .required("Required!"),
      email: Yup.string()
        .max(35, "Max letters are 35!")
        .min(1, "Min length is 1!")
        .required("Required!"),
      address: Yup.string().min(1, "Min length is 1!").required("Required!"),
      city: Yup.string().min(1, "Min length is 1!").required("Required!"),
      country: Yup.string().min(1, "Min length is 1!").required("Required!"),
      postalCode: Yup.string()
        .max(10, "Max numbers are 10!")
        .min(1, "Min length is 1!")
        .required("Required!"),
    }),
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: (values) => {
      const customer = values;
      dispatch(addCustomer(customer));
      navigate("/customers");
    },
  });

  return (
    <div className="Customer">
      <div className="Form">
        <p>
          <b>Name: </b>
        </p>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
      </div>
      <div className="Form">
        <p>
          <b>Phone: </b>
        </p>
        <input
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.phone && (
          <p style={{ color: "red" }}>{formik.errors.phone}</p>
        )}
      </div>{" "}
      <div className="Form">
        <p>
          <b>Email: </b>
        </p>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
      </div>{" "}
      <div className="Form">
        <p>
          <b>Address: </b>
        </p>
        <input
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.address && (
          <p style={{ color: "red" }}>{formik.errors.address}</p>
        )}
      </div>{" "}
      <div className="Form">
        <p>
          <b>City: </b>
        </p>
        <input
          type="text"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.city && (
          <p style={{ color: "red" }}>{formik.errors.city}</p>
        )}
      </div>{" "}
      <div className="Form">
        <p>
          <b>Country: </b>
        </p>
        <input
          type="text"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.country && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
      </div>{" "}
      <div className="Form">
        <p>
          <b>Postal Code: </b>
        </p>
        <input
          type="text"
          name="postalCode"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.postalCode && (
          <p style={{ color: "red" }}>{formik.errors.postalCode}</p>
        )}
      </div>
      <div className="Button-area">
        <button type="button" onClick={formik.handleSubmit}>
          Submit!
        </button>
        <button type="button" onClick={() => navigate('/customers')}>Cancel</button>
      </div>
    </div>
  );
}
