import React, { useState, useEffect } from "react";
import { getAllCategories } from "./category/categoryApi";

const Categories = ({ passing_handleFilters }) => {
  // to display categories
  const [categories, setCategories] = useState([]);

  // to store only checked categories
  const [checked, setChecked] = useState([]);

  const handleToggle = (c) => {
    // to check whether it is already there or not, which one is checked
    const currentCategoryId = checked.indexOf(c);
    // to get previous
    const newCheckedCategoryId = [...checked];
    // line 13 gives index if present, -1 if not present
    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c); //if not present add to the array of checked
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1); //if already present, remove from array using splice method
    }
    setChecked(newCheckedCategoryId);   //store newly changed checked category
    passing_handleFilters(newCheckedCategoryId, "category");   //calling the finction of deals page, passign newly changed checked array into filters 
  };

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setCategories(data);
        }
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      {categories.map((category, i) => {
        return (
          <div key = {i} className="form-check">
            <input
              className="form-check-input mt-1 me-2"
              type="checkbox"
              onChange={() => handleToggle(category._id)}
              value={category._id}
              id={category._id}
            />
            <label className="form-check-label" for={category._id}>
              {category.category_name}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Categories;
