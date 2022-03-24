import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/actions/categoriesActions";
import CategoryField from "../Fields/CategoryField";

import "./List.css";

function CategoriesList() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => dispatch(fetchCategories()), [dispatch]);

  return (
      <div className="List" style={{width: '65vw'}}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {categories ? (
              categories.map((el, key) => {
                return (
                  <tr key={key}>
                    <th>{el.id}</th>
                    <td>{el.name}</td>
                    <td
                      style={{
                        backgroundColor: el.color,
                      }}
                    >
                      {el.color}
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1 id="loading">Loading...</h1>
            )}
            <CategoryField/>
          </tbody>
        </table>
      </div>
  );
}

export default CategoriesList;
