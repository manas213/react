import { API } from "../../config";

// to get all categories from backend
export const getAllCategories = () => {
  // console.log("fetching data")
  return fetch(`http://localhost:5000/api/categories`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// to add new category
export const addCategory = (category, token) => {
  // console.log(category_name);
  return fetch(`http://localhost:5000/api/addcat`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// to delete category
export const deleteCategory = (id, token) => {
  return fetch(`http://localhost:5000/api/deletecat/${id}`, {
    method: "DELETE",
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// to find a category
export const findCategory = (id) => {
  return fetch(`http://localhost:5000/api/findcat/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// to update category
export const updateCategory = (id, category_name, token) => {
  return fetch(`http://localhost:5000/api/updatecat/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(category)
    body: JSON.stringify({category_name}),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
