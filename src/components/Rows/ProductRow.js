import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotification } from "../../store/actions/notificationsActions";
import { updateProduct } from "../../store/actions/productsActions";
import { removeProduct } from "../../store/actions/productsActions";
import { fetchCategories } from "../../store/actions/categoriesActions";

export default function ProductRow(props) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => dispatch(fetchCategories()), [dispatch]);

  const handleRemove = () => {
    dispatch(removeProduct(props.id));
    dispatch(
      addNotification({
        title: "Product removed!",
        message: `The product ${props.name} was removed from the system!`,
        color: "Danger",
      })
    );
  };
  
  const formik = useFormik({
    initialValues: {
      name: props.name,
      category: props.category,
      quantity: props.quantity,
      price: props.price,
    },
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: (values) => {
      const product = {
        id: props.id,
        name: values.name,
        category: values.category,
        quantity: values.quantity,
        price: values.price,
      };
      dispatch(updateProduct(product));
      setEdit(false)
      dispatch(
        addNotification({
          title: "Product updated!",
          message: `The product ${props.name} was updated from the system!`,
          color: "Information",
        })
      );
    },
  });
  
  return (
    <>
      {
        //Edit mode
        edit ? (
          <tr key={props.key} style={{backgroundColor: '#c8fec8'}}>
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
              <select
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                style={{ width: "100%" }}
              >
                {categories ? (
                  categories.map((el) => {
                    return <option>{el.name}</option>;
                  })
                ) : (
                  <option>Loading...</option>
                )}
              </select>
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
              <button type="button" onClick={formik.handleSubmit}>
                S
              </button>
            </td>
            <td>
              <button type="button" onClick={() => setEdit(false)}>
                C
              </button>
            </td>
          </tr>
        ) : (
          //Normal mode
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
              <button type="button" onClick={() => handleRemove()}>
                X
              </button>
            </td>
          </tr>
        )
      }
    </>
  );
}
